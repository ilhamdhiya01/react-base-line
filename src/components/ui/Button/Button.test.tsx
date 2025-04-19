import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Button from './Button';

describe('Button', () => {
  it('menampilkan teks sesuai children', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('menjalankan fungsi onClick saat diklik', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Tombol</Button>);
    fireEvent.click(screen.getByText('Tombol'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('tidak memanggil onClick kalau disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    );
    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
