import "@testing-library/svelte/vitest";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";


Object.assign(window.navigator, {
    clipboard: {
      writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      
    },
  });
