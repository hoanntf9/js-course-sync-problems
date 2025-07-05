// JS là ngôn ngữ đơn luồng (Single thread)

// Đồng bộ (Synchronous): Code chạy ngay, lần lượt
// console.log(1);
// console.log(2);
// console.log(3);

// kết quả: 1, 2, 3

// Bất đồng bộ (Asynchronous): Code không chạy ngay, không lần lượt
// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 2000);

// console.log(3);
// kết quả: 1, 3, 2

// Các task vụ liên quan đến bất đồng bộ
/**
 * 1. Timer (setTimeout, setInterval...)
 * 2. DOM events
 * 3. fetch, axios
 * 4. XMLHttpRequest
 * 5. requestAnimationFrame
 * 6. Read file, Write file...
 * ...
 */

// Tại sao JS là ngôn ngữ đơn luồng nhưng lại phải nghĩ cách cho nó chạy bất đồng bộ để làm gì?

// Sync (đồng bộ)
// - Task 1: 2s
// - Task 2: 2s
// - Task 3: 2s
// Tổng thời gian: 6s

// Async (bất đồng bộ)
// - Task 1: 2s
// - Task 2: 2s
// - Task 3: 2s
// Tổng thời gian: 2s

setTimeout(() => {
  console.log(1);
}, 2000);

setTimeout(() => {
  console.log(2);
}, 2000);

setTimeout(() => {
  console.log(3);
}, 2000);

console.log(123456);

// Ưu nhược điểm của đồng bộ / bất đồng bộ

// 1. Đồng bộ
// ✅ Ưu điểm:
// - Code chạy tuần tự, dễ bảo trì, dễ phát triển
// - Đơn giản để viết code: Không cần xử lý callback, promise hay async/await
// - Kiểm soát luồng tốt hơn: Biết trước việc nào xong trước việc nào xong sau

// ❌ Nhược điểm:
// - Tuần tự nên có thể gối đầu các công việc mất thời gian hơn
// - Kém hiệu quả khi xử lý tác vụ lâu: ví dụ chờ phản hồi server sẽ làm "đơ" chương trình
// - Không thích hợp cho các ứng dụng thời gian thực hoặc đa tác vụ

// 1. Bất đồng bộ
// ✅ Ưu điểm:
// - Xử lý tiết kiệm thời gian hơn
// - Không chặn luồng (non-blocking): Có thể xử lý nhiều tác vụ cùng lúc, nâng cao hiệu suất.
// - Tối ưu tài nguyên: Thích hợp cho xử lý liên quan đến timer (callAPI, đọc/ghi file, truy cập CSDL...)

// ❌ Nhược điểm:
// - Khó debug hơn, học nâng cao hơn:
// - Gây ra callback hell (nếu không dùng promise hoặc async để xử lý)
// - Yêu cầu đòi hỏi kỹ thuật cao hơn: cần hiểu sâu về Promise, async/await, event loop...

// ❓🤔 JavaScript là ngôn ngữ đồng bộ hay bất đồng bộ?
// JS là ngôn ngữ đơn luồng (single thread) -> có 1 luồng chính (main thread) -> có 1 callstack --> chạy đồng bộ
// Javascript là ngôn ngữ đồng bộ, đơn luồng nhưng có hỗ trợ cơ chế bất đồng bộ nhờ Event Loop,
// callback, promise, async/await...


// Thầy Sơn chia sẻ về kiến thức đồng bộ
// chạy đồng bộ thì dễ dàng lấy kết quả của A làm đầu vào của B.

// Nhưng chạy bất đồng bộ thì lại khó khăn, bởi A chưa chạy xong đã chạy tới B rồi.

// Nên ngta tạo ra callback, callback giúp ta biết khi nào việc bất đồng bộ thực thi xong, mặc dù code đã chạy qua đoạn trên đó lâu rồi.

// Callback khi gặp các tác vụ phụ thuộc nhau (kết quả của A lại là đầu vào của B) ... sẽ sinh ra callback hell, dẫn tới khó đọc và khó bảo trì.

// Ngta tạo ra Promise để quản lý công việc bất đồng bộ bằng cú pháp theo chuỗi (promise chain) dạng: promise.then(...).then(...).then(...)...

// Promise dùng ko theo chain như trên thì cũng Promise hell, dùng đúng cách thì cú pháp vẫn chưa clear, chạy có vẻ tuần tự nhưng code trông chưa tự nhiên.

// Sau đó sinh ra async và await là cú pháp mới giúp thể hiện promise trông giống như là viết code đồng bộ, giúp khắc phục các vấn đề của callback và promise.



