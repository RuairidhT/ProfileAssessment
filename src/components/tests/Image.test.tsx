import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Image } from '../Image';

describe('Image', () => {
  it('renders correctly with a given profileImgSrc', () => {
    const profileImgSrc = 'https://example.com/profile.jpg';
    const { getByAltText } = render(<Image profileImgSrc={profileImgSrc} />);

    const imgElement = getByAltText('profile Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', profileImgSrc);
  });

  it('renders correctly without a profileImgSrc', () => {
    const { getByAltText } = render(<Image profileImgSrc={undefined} />);

    const imgElement = getByAltText('profile Image');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).not.toHaveAttribute('src', '');
  });

  it('has the correct initial class names', () => {
    const { container } = render(
      <Image profileImgSrc="https://example.com/profile.jpg" />
    );

    const outerDiv = container.querySelector('.md\\:shrink-0');
    expect(outerDiv).toBeInTheDocument();

    const placeholderDiv = container.querySelector('.bg-slate-800');
    expect(placeholderDiv).toBeInTheDocument();

    const imageContainerDiv = container.querySelector(
      '.mx-auto.w-32.h-32.md\\:h-48.md\\:w-48.relative.md\\:-mt-72.md\\:ml-40.-mt-16.border-2.border-white.dark\\:border-slate-700.rounded-full.overflow-hidden'
    );
    expect(imageContainerDiv).toBeInTheDocument();
  });
});
