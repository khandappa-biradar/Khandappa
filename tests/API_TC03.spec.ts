import { test, expect } from '@playwright/test';

test('API_TC03 - update post id 6 (PUT)', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/6', {
    data: {
      id: 6,
      title: 'updated title for id 6',
      body: 'updated body for id 6',
      userId: 2,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log('update json', JSON.stringify(responseBody));

  expect(responseBody.id).toBe(6);
  expect(responseBody.title).toBe('updated title for id 6');
  expect(responseBody.body).toBe('updated body for id 6');
  expect(responseBody.userId).toBe(2);
});
