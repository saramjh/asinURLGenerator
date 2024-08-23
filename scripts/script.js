document.addEventListener("DOMContentLoaded", function () {
	const amzAddress = document.getElementById("amzAddress")
	const codeInput = document.getElementById("codeInput")
	const output = document.getElementById("output")
	const downloadBtn = document.getElementById("downloadBtn")
	const clearBtn = document.getElementById("clearBtn")
	const modal = document.getElementById("modal")
	const closeBtn = document.querySelector(".close-btn")

	// Set initial URL and generate links
	amzAddress.value = "https://www.amazon.co.jp/dp/" // Example URL
	generateLinks()

	// Event listener for generating links on input change
	codeInput.addEventListener("input", generateLinks)
	amzAddress.addEventListener("input", generateLinks)

	// Event listener for clearing textarea
	clearBtn.addEventListener("click", () => {
		codeInput.value = ""
		generateLinks() // Clear generated links
	})

	// Function to generate links
	function generateLinks() {
		const baseUrl = amzAddress.value.trim()
		let codes = codeInput.value.trim().split("\n")
		output.innerHTML = ""

		if (!baseUrl) {
			return
		}

		// Add a trailing slash if not present
		if (!baseUrl.endsWith("/")) {
			baseUrl += "/"
		}

		codes.forEach((code) => {
			if (code.trim()) {
				const link = document.createElement("a")
				link.href = `${baseUrl}${code.trim()}`
				link.textContent = `${baseUrl}${code.trim()}`
				link.target = "_blank"
				output.appendChild(link)
				output.appendChild(document.createElement("br"))
			}
		})
	}

	// Function to get the current date formatted as YYYY-MM-DD
	function getFormattedDate() {
		const now = new Date()
		const year = now.getFullYear()
		const month = String(now.getMonth() + 1).padStart(2, "0") // Months are zero-based
		const day = String(now.getDate()).padStart(2, "0")
		return `${year}-${month}-${day}`
	}

	// Event listener for downloading the Excel file
	downloadBtn.addEventListener("click", () => {
		const baseUrl = amzAddress.value.trim()
		let codes = codeInput.value.trim().split("\n")
		let data = []

		if (baseUrl && codes.some((code) => code.trim() !== "")) {
			// Add a trailing slash if not present
			if (!baseUrl.endsWith("/")) {
				baseUrl += "/"
			}

			// Prepare the data array with a header row
			data.push(["ASIN URL"]) // Header row
			codes.forEach((code) => {
				if (code.trim()) {
					data.push([`${baseUrl}${code.trim()}`])
				}
			})

			// Convert data to worksheet
			const ws = XLSX.utils.aoa_to_sheet(data)
			const wb = XLSX.utils.book_new()
			XLSX.utils.book_append_sheet(wb, ws, "ASIN Links")

			// Generate filename with the current date
			const filename = `ASIN_Links_${getFormattedDate()}.xlsx`

			// Generate and download Excel file
			XLSX.writeFile(wb, filename)
		} else {
			// Show modal if no ASIN codes are entered
			modal.style.display = "block"
		}
	})

	// Close modal when the close button is clicked
	closeBtn.addEventListener("click", () => {
		modal.style.display = "none"
	})

	// Close modal if clicked outside the modal content
	window.addEventListener("click", (event) => {
		if (event.target === modal) {
			modal.style.display = "none"
		}
	})
})
