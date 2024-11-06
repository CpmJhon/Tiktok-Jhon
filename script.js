async function downloadVideo() {
    const videoURL = document.getElementById("videoURL").value;
    const result = document.getElementById("result");

    // Validasi URL
    if (!videoURL.includes("tiktok.com")) {
        result.innerHTML = "Please enter a valid TikTok URL.";
        return;
    }

    result.innerHTML = "Processing...";

    try {
        // Mengirim permintaan ke server API eksternal untuk mengunduh video
        const response = await fetch('https://api.example.com/tiktok/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: videoURL })
        });

        const data = await response.json();

        if (data.success) {
            // Menampilkan link unduhan jika berhasil
            result.innerHTML = `
                <p>Video Downloaded Successfully!</p>
                <a href="${data.downloadLink}" target="_blank">Download Video</a>
            `;
        } else {
            result.innerHTML = "Failed to download video. Please try again.";
        }
    } catch (error) {
        console.error("Error:", error);
        result.innerHTML = "An error occurred while downloading the video.";
    }
}
