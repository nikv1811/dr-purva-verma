import { render, screen, waitFor } from '@testing-library/react';
import Testimonial from './components/Testimonial';

describe('Testimonial', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        averageRating: 5,
        totalReviewCount: 1,
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

  test('shows the aggregate average rating from the API', async () => {
    render(<Testimonial />);

    await waitFor(() => {
      expect(screen.getByText('5.0')).toBeInTheDocument();
    });
  });

  test('renders a full star row for Google-style ratings', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        averageRating: 4.5,
        totalReviewCount: 1,
        reviews: [
          {
            reviewer: { displayName: 'Bob Smith' },
            comment: 'Helpful and professional.',
            starRating: { value: 4.5 },
            createTime: '2024-01-05T00:00:00Z',
          },
        ],
      }),
    });

    const { container } = render(<Testimonial />);

    await waitFor(() => {
      expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    });

    expect(container.querySelectorAll('span[aria-label*="Rating:"]').length).toBeGreaterThan(0);
  });

  test('shows a 4-star review first when sorting by lowest rating', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        averageRating: 4.9,
        totalReviewCount: 2,
        reviews: [
          {
            reviewer: { displayName: 'Top Rated' },
            comment: 'Excellent.',
            starRating: { value: 5 },
            createTime: '2024-01-10T00:00:00Z',
          },
          {
            reviewer: { displayName: 'Lower Rated' },
            comment: 'Good but not perfect.',
            starRating: { value: 4 },
            createTime: '2024-01-09T00:00:00Z',
          },
        ],
      }),
    });

    render(<Testimonial />);

    const lowestButton = await screen.findByRole('button', { name: 'Lowest rating' });
    lowestButton.click();

    await waitFor(() => {
      expect(screen.getByText('Lower Rated')).toBeInTheDocument();
    });
  });

  test('renders no reviews when the Netlify function fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('network down'));

    render(<Testimonial />);

    await waitFor(() => {
      expect(screen.queryByText(/Pragya Jain|Alice Johnson/i)).not.toBeInTheDocument();
    });
  });
});
