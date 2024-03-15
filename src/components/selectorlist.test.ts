// import {beforeAll,  expect , test, vi } from 'vitest'
// import {render , waitFor} from '@testing-library/svelte'

// // @ts-ignore
// import SelectorList from './SelectorList.svelte'

// import userEvent from "@testing-library/user-event";


// beforeAll(()=> {

// vi.stubGlobal("window", {
//     matchMedia: vi.fn().mockReturnValue({
//         matches: true,
//     }),
// });

// vi.stubGlobal("localStorage", {
//     getItem: vi.fn().mockReturnValue('light'),
//     setItem: vi.fn(),
// });

// })


// test('should render selectorlist',  () => {
//   const {getByRole} = render(SelectorList)
//   const menuEL = getByRole('list')
//   expect(menuEL).toBeInTheDocument()
// })


// test('should indicate the current theme saved in local storage',  () => {
//     const {getByRole} = render(SelectorList)
//     const buttonEL = getByRole('button' , {
//         name: /light/i
//     })
//     expect(buttonEL).toBeInTheDocument()
//     expect(buttonEL).toHaveClass('text-red-500')
   
// })

// test('should change the current active choice based on user interaction', async () => {
//     const { getByRole, container } = render(SelectorList);

//     const lightButtonEL = getByRole('button', {
//         name: /light/i,
//     });
//     const darkButtonEL = getByRole('button', {
//         name: /dark/i,
//     });

//     expect(lightButtonEL).toHaveClass('text-red-500');

//     userEvent.click(darkButtonEL);

//     await waitFor(() => {
//         expect(darkButtonEL).toHaveClass('text-red-500');
//         expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
//     }, {
//         container,
//     });
// });

// test('should get the current system theme when the user hasnt saved any preference',  () => {
//     vi.stubGlobal("localStorage", {
//         getItem: vi.fn().mockReturnValue(null),
//         setItem: vi.fn(),
//     })
//     const {getByRole} = render(SelectorList)
//     const buttonEL = getByRole('button' , {
//         name: /dark/i
//     })
//     expect(buttonEL).toBeInTheDocument()
//     expect(buttonEL).toHaveClass('text-red-500')
// })



