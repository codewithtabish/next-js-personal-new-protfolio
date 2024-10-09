/** @format */

'use client';

import React, {
  PropsWithChildren,
  useRef,
  forwardRef,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion';

import { cn } from '@/lib/utils';

// Define default values for magnification and distance
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

// Interface for Dock props with optional and default properties
export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: 'top' | 'middle' | 'bottom';
  children: React.ReactNode;
}

// cva function is used for defining dynamic class names
const dockVariants = cva(
  'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md'
);

// ForwardRef component for Dock with ref type specified as HTMLDivElement
const Dock = forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = 'bottom',
      ...props
    },
    ref
  ) => {
    // Initialize motion value with a default value of Infinity
    const mouseX = useMotionValue(Infinity);

    // Helper function to render children with additional props if they are DockIcon elements
    const renderChildren = () => {
      return Children.map(children, (child) => {
        if (isValidElement(child) && child.type === DockIcon) {
          return cloneElement(child, {
            ...child.props,
            mouseX: mouseX, // Pass the motion value to DockIcon
            magnification: magnification,
            distance: distance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)} // Update motion value on mouse move
        onMouseLeave={() => mouseX.set(Infinity)} // Reset motion value when mouse leaves
        {...props}
        className={cn(dockVariants({ className }), {
          'items-start': direction === 'top',
          'items-center': direction === 'middle',
          'items-end': direction === 'bottom',
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

// Assign display name for debugging purposes
Dock.displayName = 'Dock';

// Interface for DockIcon props
export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX: MotionValue<number>; // Make mouseX required
  className?: string;
  children?: React.ReactNode;
}

// Component for individual dock icons
const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX, // Ensure mouseX is passed properly
  className,
  children,
  ...props
}: DockIconProps) => {
  // Create a ref for accessing the DOM element
  const ref = useRef<HTMLDivElement>(null);

  // Ensure ref and mouseX are defined before using them
  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return 0; // Default to 0 if bounds are not available
    return val - bounds.x - bounds.width / 2;
  });

  // Transform and animate width of the icon based on the mouse distance
  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  // Use spring animation for smooth scaling
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Assign display name for debugging purposes
DockIcon.displayName = 'DockIcon';

// Export Dock and DockIcon components along with dockVariants for use elsewhere
export { Dock, DockIcon, dockVariants };
