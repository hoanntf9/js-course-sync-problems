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



