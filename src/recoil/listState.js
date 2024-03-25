import { atom } from 'recoil'

const listTodoState = atom({
  key: 'loginInfo',
  default: null,
})

import { selector } from 'recoil'

export const loginInfoState = selector({
  // newListState này sẽ chứa danh sách các action có trạng thái là new.
  key: 'login_info',
  get: ({ get }) => {
    const item = get(listTodoState) // đây là cách để lấy cả list todo đã tạo với atom ở bước trên.
    return item // chọn và trả về những thằng có status là new.
  },
  set: ({ get, set }, value) => {
    const item = get(listTodoState)
    // tạo 1 cái hành động mới

    set(listTodoState, item) // hàm set dùng để thay đổi giá trị của recoil state từ atom
  },
})

export const resetStoreOnLogout = selector({
  key: 'resetStoreOnLogout',
  get: ({ get }) => {
    const item = get(listTodoState) // đây là cách để lấy cả list todo đã tạo với atom ở bước trên.
    return item // chọn và trả về những thằng có status là new.
  },
  set: ({ set }) => {
    // Reset các giá trị trong store

    const item = get(listTodoState)
    // tạo 1 cái hành động mới

    set(listTodoState, null) // hàm se
  },
})
