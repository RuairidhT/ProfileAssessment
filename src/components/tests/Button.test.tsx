import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '../Button';

describe('Button', () => {
  it('renders the button with the given title', () => {
    const title = 'Click me';
    const { getByText } = render(<Button title={title} />);

    const buttonElement = getByText(title);
    expect(buttonElement).toBeInTheDocument();
  });

  it('has the correct initial class names', () => {
    const title = 'Click me';
    const { getByText } = render(<Button title={title} />);

    const buttonElement = getByText(title);
    expect(buttonElement).toHaveClass('bg-indigo-600');
    expect(buttonElement).toHaveClass('dark:bg-slate-800');
    expect(buttonElement).toHaveClass('hover:dark:bg-slate-500');
    expect(buttonElement).toHaveClass('hover:bg-indigo-800');
    expect(buttonElement).toHaveClass('text-white');
    expect(buttonElement).toHaveClass('py-2');
    expect(buttonElement).toHaveClass('px-4');
    expect(buttonElement).toHaveClass('rounded-full');
    expect(buttonElement).toHaveClass('w-full');
  });

  it('should match snapshot', () => {
    const title = 'Click me';
    const { container } = render(<Button title={title} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
