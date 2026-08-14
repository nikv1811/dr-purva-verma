import { render, screen, waitFor } from '@testing-library/react';
import Testimonial from './components/Testimonial';

describe('Testimonial', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        reviews: [
          {
            reviewer: { displayName: 'Alice Johnson' },
            comment: 'Amazing experience and care.',
            starRating: { value: 5 },
            createTime: '2024-01-02T00:00:00Z',
          },
        ],
      }),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('loads reviews from the Netlify function endpoint', async () => {
    render(<Testimonial />);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/.netlify/functions/reviews');
    });

    expect(await screen.findByText('Alice Johnson')).toBeInTheDocument();
  });
});
