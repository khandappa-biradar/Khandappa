import { test, expect } from '@playwright/test';

test('TC02', async ({ request }) => {

  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
    headers: {
      'Content-type': 'application/json',
    },
  });

  const responseBody = await response.json();

  console.log("json " + JSON.stringify(responseBody));

  console.log("text " + await response.text());

  console.log(response.headers()['content-type']);

  expect(response.status()).toBe(201);

  expect(responseBody).toHaveProperty('id', 101);
});

// Added test: update post using PUT
test('TC03 - update post (PUT)', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1,
    },
    headers: {
      'Content-type': 'application/json',
    },
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log("update json " + JSON.stringify(responseBody));

  expect(responseBody.title).toBe('updated title');
  expect(responseBody.body).toBe('updated body');
  expect(responseBody.userId).toBe(1);
});

// Added test: delete post using DELETE
test('TC04 - delete post (DELETE)', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

  // JSONPlaceholder returns 200 with an empty object for DELETE
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log("delete json " + JSON.stringify(responseBody));

  // validate empty object response
  expect(responseBody).toEqual({});
});




