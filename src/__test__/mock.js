export const mockRateItems = [
  {
    avatar: "../assets/avatar.jpg",
    author_name: "Trần Hùng",
    time: "31 phút trước",
    book: "../assets/book1.jpg",
    title: "Anh Da Đen và những câu chuyện",
    content: `that have a near-identical initial appearance for single, multiple, and disabled
      select elements across the top browsers. A few properties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.
      perties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.`,
  },
  {
    avatar: "../assets/avatar.jpg",
    author_name: "Hoài Nhớ",
    time: "32 phút trước",
    book: "../assets/book4.jpg",
    title: "Anh Da Đen và những câu chuyện",
    content: `that have a near-identical initial appearance for single, multiple, and disabled
      select elements across the top browsers. A few properties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.
      perties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.`,
  },
  {
    avatar: "../assets/avatar.jpg",
    author_name: "Hoài Nhớ",
    time: "33 phút trước",
    book: "../assets/book2.jpg",
    title: "Anh Da Đen và những câu chuyện",
    content: `that have a near-identical initial appearance for single, multiple, and disabled
      select elements across the top browsers. A few properties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.
      perties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.`,
  },
  {
    avatar: "../assets/avatar.jpg",
    author_name: "Hoài Nhớ",
    time: "330 phút trước",
    book: "../assets/book3.jpg",
    title: "Anh Da Đen và những câu chuyện",
    content: `that have a near-identical initial appearance for single, multiple, and disabled
      select elements across the top browsers. A few properties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.
      perties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.`,
  },
  {
    avatar: "../assets/avatar1.jpg",
    author_name: "Hoài Nhớ",
    time: "301 phút trước",
    book: "../assets/book1.jpg",
    title: "Anh Da Đen và những câu chuyện",
    content: `that have a near-identical initial appearance for single, multiple, and disabled
      select elements across the top browsers. A few properties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.
      perties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.`,
  },
  {
    avatar: "../assets/avatar.jpg",
    author_name: "Hoài Nhớ",
    time: "30 phút trước",
    book: "../assets/book1.jpg",
    title: "Anh Da Đen và những câu chuyện",
    content: `that have a near-identical initial appearance for single, multiple, and disabled
      select elements across the top browsers. A few properties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.
      perties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.`,
  },
  {
    avatar: "../assets/avatar.jpg",
    author_name: "Hoài Nhớ",
    time: "30 phút trước",
    book: "../assets/book1.jpg",
    title: "Anh Da Đen và những câu chuyện",
    content: `that have a near-identical initial appearance for single, multiple, and disabled
      select elements across the top browsers. A few properties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.
      perties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.`,
  },
  {
    avatar: "../assets/avatar.jpg",
    author_name: "Hoài Nhớ",
    time: "30 phút trước",
    book: "../assets/book1.jpg",
    title: "Anh Da Đen và những câu chuyện",
    content: `that have a near-identical initial appearance for single, multiple, and disabled
      select elements across the top browsers. A few properties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.
      perties and techniques our
      solution will use: clip-path to create the custom dropdown arrow.`,
  },
];

export const mockDataUsers = [
  {
    case: "Đăng nhập với tài khoản và mật khẩu đúng như yêu cầu",
    username: "hung2",
    password: "hung2",
    result: "Login successfully",
  },
  {
    case: "Bỏ trống các trường không nhập giá trị",
    username: "",
    password: "",
    result: "Username or Password INVALID",
  },
  {
    case: "Nhập tài khoản nhưng không nhập mật khẩu",
    username: "hung2",
    password: "",
    result: "Username or Password INVALID",
  },
  {
    case: "Nhập mật khẩu nhưng không nhập tài khoản",
    username: "",
    password: "hung2",
    result: "Username or Password INVALID",
  },
  {
    case: `Nhập giá trị “Khoảng trắng”`,
    username: "    ",
    password: "   ",
    result: "Username or Password INVALID",
  },
  {
    case: `Nhập các giá trị có bao gồm khoảng trắng`,
    username: "hung hung",
    password: "hung hung",
    result: "Username or Password INVALID",
  },
  {
    case: `Nhập các giá trị gồm 1 2 kí tự`,
    username: "a",
    password: "a",
    result: "Username or Password INVALID",
  },
  {
    case: "Nhập các giá trị có bao gồm ký tự đặc biệt",
    username: "!32$%@  **",
    password: "()1#~~4)",
    result: "Username or Password INVALID",
  },
];
