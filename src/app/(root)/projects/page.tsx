/** @format */
import { Button } from '@/components/ui/button';
import React from 'react';
import axios from 'axios';

const page = () => {
  const url = 'https://monitoryour.website/api/events';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'muf879pmb82rixhbsjye',
  };
  const eventData = {
    name: 'Payments', //* required
    domain: 'codewithtabish.com', //* required
    description: 'The payment of the stories has been done', //optional
  };

  const sendRequest = async () => {
    axios
      .post(url, eventData, { headers })
      .then()
      .catch((error) => {
        console.error('Error:', error);
        console.error('Error:', error);
      });
  };
  return (
    <div className='max-w-6xl mx-auto py-12'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quaerat
      natus labore illum laborum. Quo quisquam pariatur, deserunt delectus
      minima, quam excepturi quos facere repellat voluptatibus impedit labore ut
      iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
      quaerat natus labore illum laborum. Quo quisquam pariatur, deserunt
      delectus minima, quam excepturi quos facere repellat voluptatibus impedit
      labore ut iure! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Unde quaerat natus labore illum laborum. Quo quisquam pariatur, deserunt
      delectus minima, quam excepturi quos facere repellat voluptatibus impedit
      labore ut iure! lor
      <hr />
      <hr />
      <hr />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        praesentium autem, architecto omnis similique iusto cupiditate assumenda
        aspernatur sequi maiores vero harum odio facere illum itaque voluptatum
        dolore non? Odit?
      </p>
      <Button onClick={sendRequest}>Add Project</Button>
    </div>
  );
};

export default page;
