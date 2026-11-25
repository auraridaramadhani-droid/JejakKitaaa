document.addEventListener('DOMContentLoaded', () => {
    // 1. Toggle Navigasi Mobile
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Fitur Utama 1: Cek Kilat 60 Detik
    const cekForm = document.getElementById('cekKilatForm');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const resultBox = document.getElementById('resultBox');
    const resetBtn = document.getElementById('resetBtn');

    // Update progress bar saat radio button dipilih
    cekForm.addEventListener('change', () => {
        let answered = 0;
        for (let i = 1; i <= 5; i++) {
            if (document.querySelector(`input[name="q${i}"]:checked`)) {
                answered++;
            }
        }
        const percent = (answered / 5) * 100;
        progressBar.style.width = `${percent}%`;
        progressText.textContent = `Terjawab: ${answered} dari 5 poin pemeriksaan`;
    });

    // Proses analisis hasil
    cekForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let totalScore = 0;
        let answeredCount = 0;
        let criticalFail = false;

        for (let i = 1; i <= 5; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected) {
                const val = parseInt(selected.value, 10);
                totalScore += val;
                answeredCount++;
                // Jika izin privasi (q3) atau keamanan data (q4) bernilai 0, tandai sebagai pelanggaran kritis
                if ((i === 3 || i === 4) && val === 0) {
                    criticalFail = true;
                }
            }
        }

        if (answeredCount < 5) {
            alert('Mohon lengkapi ke-5 poin pemeriksaan terlebih dahulu agar analisis akurat.');
            return;
        }

        const resultBadge = document.getElementById('resultBadge');
        const resultTitle = document.getElementById('resultTitle');
        const resultDesc = document.getElementById('resultDesc');
        const resultTips = document.getElementById('resultTips');

        resultBox.className = 'result-box';
        resultTips.innerHTML = '';

        if (criticalFail || totalScore <= 4) {
            resultBox.classList.add('result-danger');
            resultBadge.className = 'status-badge badge-danger';
            resultBadge.textContent = '🛑 SEBAIKNYA JANGAN DISEBAR';
            resultTitle.textContent = 'Risiko Tinggi: Rawan Hoaks atau Pelanggaran Privasi';
            resultDesc.textContent = 'Konten ini berpotensi memicu kesalahpahaman, merugikan nama baik orang lain, atau membocorkan data pribadi.';
            resultTips.innerHTML = `
                <li>Hentikan niat meneruskan pesan atau mengunggah konten ini.</li>
                <li>Jika menyangkut orang lain, pastikan tidak menyebarkan foto/chat tanpa izin.</li>
                <li>Konfirmasi langsung ke guru atau pihak sekolah yang berwenang.</li>
            `;
        } else if (totalScore <= 7) {
            resultBox.classList.add('result-warn');
            resultBadge.className = 'status-badge badge-warn';
            resultBadge.textContent = '⚠️ PERLU DICEK ULANG';
            resultTitle.textContent = 'Tahan Sebentar: Informasi Belum Sepenuhnya Utuh';
            resultDesc.textContent = 'Ada bagian yang masih meragukan, baik dari segi sumber resmi, keutuhan konteks, maupun izin pihak terkait.';
            resultTips.innerHTML = `
                <li>Tanyakan sumber aslinya sebelum diteruskan ke grup kelas.</li>
                <li>Sensor/blur wajah atau data sensitif jika memang perlu dibagikan.</li>
                <li>Tambahkan keterangan konteks yang jelas agar tidak memicu kepanikan.</li>
            `;
        } else {
            resultBox.classList.add('result-safe');
            resultBadge.className = 'status-badge badge-safe';
            resultBadge.textContent = '✅ AMAN DIBAGIKAN';
            resultTitle.textContent = 'Layak Dibagikan: Sumber Jelas & Menjaga Etika';
            resultDesc.textContent = 'Informasi ini memiliki sumber yang dapat dipertanggungjawabkan, konteks utuh, dan menghormati privasi warga sekolah.';
            resultTips.innerHTML = `
                <li>Tetap gunakan bahasa yang sopan dan tidak provokatif saat membagikan.</li>
                <li>Sertakan sumber resmi agar teman lain juga teredukasi.</li>
            `;
        }

        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    resetBtn.addEventListener('click', () => {
        cekForm.reset();
        progressBar.style.width = '0%';
        progressText.textContent = 'Terjawab: 0 dari 5 poin pemeriksaan';
        resultBox.classList.add('hidden');
    });

    // 3. Fitur Utama 2: Studi Kasus Interaktif
    const casesData = [
        {
            title: 'Kasus 1: Potongan Screenshot Chat Pengurus Kelas',
            scenario: 'Seorang teman mengirimkan potongan screenshot chat ketua kelas yang terkesan marah-marah soal uang kas, lalu menyebarkannya ke grup angkatan tanpa konteks percakapan sebelumnya.',
            choices: [
                {
                    text: 'A. Ikut menyebarkan ke grup lain biar ramai dan jadi bahan candaan.',
                    correct: false,
                    feedback: '❌ Kurang tepat. Potongan chat tanpa konteks utuh sering memicu kesalahpahaman dan perundungan digital terhadap pengurus kelas.'
                },
                {
                    text: 'B. Menahan diri, tidak meneruskan, dan menanyakan konteks utuhnya ke ketua kelas.',
                    correct: true,
                    feedback: '✅ Bijak! Memeriksa konteks utuh mencegah fitnah dan menjaga iklim komunikasi antarsiswa tetap sehat.'
                }
            ]
        },
        {
            title: 'Kasus 2: Mengunggah Foto Teman Tertidur di Kelas ke TikTok/Story',
            scenario: 'Saat jam istirahat, kamu memotret teman yang tertidur dengan ekspresi lucu dan berniat menjadikannya konten Instagram Story atau TikTok.',
            choices: [
                {
                    text: 'A. Langsung unggah saja, kan cuma bercanda antar teman sekelas.',
                    correct: false,
                    feedback: '❌ Berisiko! Jejak digital sulit dihapus. Mengunggah foto tanpa izin dapat mempermalukan teman dan melanggar privasi digital.'
                },
                {
                    text: 'B. Tidak mengunggahnya ke publik dan menghapus foto jika teman merasa tidak nyaman.',
                    correct: true,
                    feedback: '✅ Tepat! Menghormati izin (consent) sebelum memotret atau mengunggah wajah orang lain adalah etika dasar warga digital.'
                }
            ]
        },
        {
            title: 'Kasus 3: Pesan Berantai Perubahan Jadwal Ujian Besok Pagi',
            scenario: 'Pukul 21.00 WIB, beredar pesan berantai di WhatsApp tanpa nama pengirim yang menyebut jadwal ujian besok diundur 2 jam.',
            choices: [
                {
                    text: 'A. Langsung percaya dan bangun siang tanpa mengecek informasi resmi.',
                    correct: false,
                    feedback: '❌ Berbahaya! Pesan anonim tanpa sumber resmi sangat rawan hoaks dan dapat merugikan nilai akademikmu.'
                },
                {
                    text: 'B. Cek pengumuman resmi sekolah / konfirmasi ke wali kelas sebelum mempercayainya.',
                    correct: true,
                    feedback: '✅ Cerdas! Selalu verifikasi pengumuman akademik ke kanal resmi sekolah atau wali kelas.'
                }
            ]
        }
    ];

    const caseDisplay = document.getElementById('caseDisplay');
    const tabBtns = document.querySelectorAll('.tab-btn');

    function renderCase(index) {
        const item = casesData[index];
        caseDisplay.innerHTML = `
            <h3>${item.title}</h3>
            <p style="margin-top:0.6rem;"><strong>Situasi:</strong> ${item.scenario}</p>
            <div class="case-choices">
                ${item.choices.map((c, idx) => `
                    <button class="choice-btn" data-idx="${idx}">${c.text}</button>
                `).join('')}
            </div>
            <div id="caseFeedback" class="case-feedback" style="display:none;"></div>
        `;

        const choiceBtns = caseDisplay.querySelectorAll('.choice-btn');
        const feedbackEl = document.getElementById('caseFeedback');

        choiceBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const chosen = item.choices[btn.dataset.idx];
                feedbackEl.style.display = 'block';
                feedbackEl.innerHTML = `<strong>Analisis JejakKita:</strong><br>${chosen.feedback}`;
            });
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCase(btn.dataset.case);
        });
    });

    // Render kasus pertama saat halaman dimuat
    renderCase(0);

    // 4. Fitur Utama 3: Asisten Rekomendasi Pelaporan
    const issueSelect = document.getElementById('issueSelect');
    const consultOutput = document.getElementById('consultOutput');

    const consultTemplates = {
        rumor: {
            advice: 'Simpan bukti screenshot penyebaran rumor, jangan terpancing membalas di grup publik, dan sampaikan kronologi ke Wali Kelas atau Guru BK.',
            draft: '"Selamat pagi/siang Bapak/Ibu [Nama Guru], saya [Nama] dari kelas [Kelas]. Saya ingin berkonsultasi terkait beredarnya rumor yang tidak benar mengenai saya di grup siswa. Berikut saya lampirkan bukti tangkapan layarnya."'
        },
        privasi: {
            advice: 'Minta pengunggah menghapus konten secara baik-baik. Jika diabaikan atau konten bersifat merendahkan, segera laporkan ke Guru BK.',
            draft: '"Halo [Nama Teman], tolong hapus foto/video saya yang kamu unggah di Story/TikTok ya, karena saya tidak nyaman dan tidak memberi izin untuk dipublikasikan. Terima kasih."'
        },
        hoaks: {
            advice: 'Jangan teruskan pesan tersebut. Tanyakan langsung di grup resmi kelas yang didampingi Wali Kelas agar informasi diluruskan untuk semua siswa.',
            draft: '"Permisi Bapak/Ibu Wali Kelas, izin mengonfirmasi apakah informasi mengenai [isi info] yang beredar di grup siswa benar adanya? Terima kasih."'
        },
        saksi: {
            advice: 'Dukung teman yang menjadi korban secara personal (empati), jangan ikut menyebarkan kontennya, dan bantu laporkan ke pihak sekolah.',
            draft: '"Selamat pagi/siang Bapak/Ibu Guru BK, saya ingin melaporkan adanya unggahan yang mengarah pada perundungan terhadap teman kami di media sosial. Mohon tindak lanjut dan pendampingannya."'
        }
    };

    issueSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (!val) {
            consultOutput.innerHTML = `<p class="placeholder-text">Saran tindakan dan contoh draf pesan kepada Wali Kelas/Guru BK akan muncul di sini setelah kamu memilih situasi.</p>`;
            return;
        }
        const data = consultTemplates[val];
        consultOutput.innerHTML = `
            <p><strong>Saran Tindakan:</strong> ${data.advice}</p>
            <div class="draft-box">
                <strong>Contoh Draf Pesan:</strong><br>${data.draft}
            </div>
        `;
    });
});
