 // Hitung total detik dari nilai awal: 18 hari + 24 jam + 6 menit + 58 detik
        let totalSeconds = (18 * 24 * 3600) + (24 * 3600) + (6 * 60) + 58;

        // Fungsi untuk update countdown
        function updateCountdown() {
            if (totalSeconds <= 0) {
                // Jika sudah habis, hentikan dan tampilkan 0
                document.getElementById('days').innerHTML = '0 <br> Hari';
                document.getElementById('hours').innerHTML = '0 <br> Jam';
                document.getElementById('minutes').innerHTML = '0 <br> Menit';
                document.getElementById('seconds').innerHTML = '0 <br> Detik';
                clearInterval(interval);
                return;
            }

            // Hitung hari, jam, menit, detik
            const days = Math.floor(totalSeconds / (24 * 3600));
            const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            // Update elemen HTML
            document.getElementById('days').innerHTML = days + ' <br> Hari';
            document.getElementById('hours').innerHTML = hours + ' <br> Jam';
            document.getElementById('minutes').innerHTML = minutes + ' <br> Menit';
            document.getElementById('seconds').innerHTML = seconds + ' <br> Detik';

            // Kurangi 1 detik
            totalSeconds--;
        }

        // Jalankan update setiap 1 detik
        const interval = setInterval(updateCountdown, 1000);

        // Jalankan sekali saat load untuk inisialisasi
        updateCountdown();