// service-worker.js

// 설치 이벤트
self.addEventListener("install", (event) => {
	console.log("서비스 워커가 설치되었습니다.")
	// 캐시를 미리 생성할 수 있습니다.
	event.waitUntil(
		caches.open("my-cache").then((cache) => {
			return cache.addAll([
				// 캐시할 파일 목록
				"/",
				"/index.html",
				"/styles.css",
				"/script.js",
				"/images/logo.png",
			])
		})
	)
})

// 활성화 이벤트
self.addEventListener("activate", (event) => {
	console.log("서비스 워커가 활성화되었습니다.")
	// 이전 캐시를 정리하는 등의 작업을 수행할 수 있습니다.
})

// 페치 이벤트
self.addEventListener("fetch", (event) => {
	console.log("리소스를 요청합니다:", event.request.url)
	event.respondWith(
		caches.match(event.request).then((response) => {
			// 캐시된 파일이 있으면 반환하고, 없으면 네트워크 요청
			return response || fetch(event.request)
		})
	)
})
