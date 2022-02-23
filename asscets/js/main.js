const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Dark Mode
const darkModeInput = $('.dark-switch')
const mainTheme = $('.main-modal')
const containerTheme = $('.container-main-theme')
const containerThemeH2 = $$('.container-main-theme h2')
const menuTagP = $$('.menu-nav p')
const menuTagH4 = $$('.menu h4')
const menuTagH3 = $$('.menu h3')
const containerTagP = $$('.container-hot p')
const containerTitleTagH2 = $$('.container-title h2')
const trendingContainerTagH2 = $$('.trending-container-sub-title h2')
const containerTitleTagP = $$('.container-title p')
const containerTagLi = $$('.container li')
const playerTagIcon = $$('.player i')
const playerTagP = $$('.player p')
const playerNavFav = $$('.player-nav-fav-icon')
const allTagIcon = $$('i')
const shortcutsTagBox = $$('.shortcuts-tags')
const suggestionTagP = $$('.suggestion p')
const shortcutsArtistTitle = $$('.suggestion-artist-category p')
const shortcutsArtistIcon = $$('.suggestion-artist-category i')
const thumbnailBox = $('.thumbnail')
const player = $('.player')
const search = $('.search')
const searchInput = $('.search-text')
const menuUser = $('.menu-user')

// Song List
const songList = $('.song-list')

// Favorite Icon
const favIcon = $('.player-nav-fav-icon:first-child')
const favIconActive = $('.player-nav-fav-icon i:first-child')

// Play, Pause, Next, Prev Button
const audio = $('#audio')
const playBtn = $('.player-nav-action-play')
const pauseBtn = $('.player-nav-action-pause')
const nextBtn = $('.player-nav-action-next')
const prevBtn = $('.player-nav-action-prev')

// Volume, Time Update
const volume = $('#volume')
const time = $('#time')

// Volume Button
const volumeLowBtn = $('.player-nav-volume-low')
const volumeHighBtn = $('.player-nav-volume-high')

// Random, Repeat 
const randomBtn = $('.player-nav-action-random')
const randomIcon = $('.player-nav-action-random i')

const repeatBtn = $('.player-nav-action-repeat')
const repeatIcon = $('.player-nav-action-repeat i')

// Time Begin, Total
const timeBegin = $('.player-time-begin')
const timeTotal = $('.player-time-total')
let updateTimer
const h2Element = $('.trending-container-sub-title h2')
const searchBox = $('.search-text')


// App
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [          
        {
            name: 'Sparkle (スパークル)',
            artist: 'RADWIMPS',
            album: '人間開花 (Your Name)',
            time: '3:01',
            path: './asscets/data/song/sparkle.mp3'
        },
        {
            name: 'Sinh Ra Đã Là Thứ Đối Lập Nhau',
            artist: 'Emcee L (Da LAB) ft. Badbies',
            album: 'Da LAB',
            time: '3:59',
            path: './asscets/data/song/sinhradalathudoilapnhau.mp3'
        },
        {
            name: 'Ghé Qua',
            artist: 'Dick x PC x Tofu',
            album: 'Taynguyensound',
            time: '4:27',
            path: './asscets/data/song/ghequa.mp3'
        },
        {
            name: 'Xe Đạp',
            artist: 'Thùy Chi',
            album: 'Tuổi học trò',
            time: '5:15',
            path: './asscets/data/song/xedap.mp3'
        },
        {
            name: '#AiChoAi',
            artist: 'FloD ft M!',
            album: 'AiChoAi',
            time: '2:39',
            path: './asscets/data/song/aichoai.mp3'
        },
        {
            name: 'Orange',
            artist: '7!!',
            album: 'Shigatsu Wa Kimi No Uso',
            time: '5:49',
            path: './asscets/data/song/orange.mp3'
        },
        {
            name: 'Sao Anh Chưa Về',
            artist: 'Amee',
            album: 'dreAMEE',
            time: '4:36',
            path: './asscets/data/song/saoanhchuave.mp3'
        },
        {
            name: '3107 3',
            artist: 'W-n ft Nâu, Duongg, Titie',
            album: '3107',
            time: '3:54',
            path: './asscets/data/song/31073.mp3'
        },
        {
            name: 'Đau Để Trưởng Thành',
            artist: 'ONLYC',
            album: 'ONLYC Album',
            time: '5:30',
            path: './asscets/data/song/daudetruongthanh.mp3'
        },
        {
            name: 'Ngày Mai Em ĐI',
            artist: 'Touliver x Lê Hiếu x Soobin Hoàng Sơn',
            album: 'SpaceSpeakers',
            time: '3:46',
            path: './asscets/data/song/ngaymaiemdi.mp3'
        },         
        {
            name: 'Ao No Waltz (蒼のワルツ)',
            artist: 'Eve',
            album: 'Josee, the Tiger and the Fish',
            time: '4:48',
            path: './asscets/data/song/aonowaltz.mp3'
        },     
        {
            name: 'Grand Escape',
            artist: 'RADWIMPS feat. Toko Miura',
            album: 'Weathering With You',
            time: '5:33',
            path: './asscets/data/song/grandescape.mp3'
        },          
        {
            name: 'Dancing With Your Ghost',
            artist: 'Sasha Alex Sloan',
            album: 'Only Child',
            time: '3:19',
            path: './asscets/data/song/dacingwithyourghost.mp3'
        },       
        {
            name: 'Chúng Ta Của Hiện Tại',
            artist: 'Sơn Tùng M-tp',
            album: 'm-tp M-TP',
            time: '14:50',
            path: './asscets/data/song/chungtacuahientai.mp3'
        },       
        {
            name: 'Save Your Tears',
            artist: 'The Weeknd',
            album: 'After Hours',
            time: '4:08',
            path: './asscets/data/song/saveyourtears.mp3'
        },        
        {
            name: 'Is There Still Anything That Love Can Do?',
            artist: 'RADWIMPS',
            album: 'UPCH-20520',
            time: '7:28',
            path: './asscets/data/song/istherestillanythinglovecando.mp3'
        },         
        {
            name: 'Anh Thế Giới Và Em',
            artist: 'The Weeknd',
            album: 'After Hours',
            time: '4:25',
            path: './asscets/data/song/anhthegioivaem.mp3'
        },          
        {
            name: 'Kimi dattara (君だったら)',
            artist: 'Happy Birthday',
            album: '...',
            time: '5:10',
            path: './asscets/data/song/kimidatara.mp3'
        },          
        {
            name: 'Michishirube (みちしるべ)',
            artist: 'Minori Chihara',
            album: 'Violet Evergarden',
            time: '4:58',
            path: './asscets/data/song/michishirube.mp3'
        },        
        {
            name: "Ex’s Hate Me (Part 2)",
            artist: 'AMEE x B RAY',
            album: 'dreAMEE',
            time: '3:40',
            path: './asscets/data/song/exhateme.mp3'
        }
    ],
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                <li class="song-items ${index === this.currentIndex ? 'song--active' : ''}" data-index="${index}">
                    <ul class="song-category">
                        <li class="song-id">
                            <p>${(index + 1) < 10 ? '0' + (index + 1) : index + 1}</p>
                        </li>
                        <li class="song-name fw-6">
                            <p>
                                <marquee scrollamount="1"
                                scrolldelay="20" truespeed="truespeed">
                                ${song.name}
                                </marquee>
                            </p>
                        </li>
                        <li class="song-artist">
                            <p>${song.artist}</p>
                        </li>
                        <li class="song-time">
                            <p>${song.time}</p>
                        </li>
                        <li class="song-album">
                            <p>${song.album}</p>
                        </li>
                    </ul>
                </li>
            `
        })
        songList.innerHTML = htmls.join('')
        $('.song--active .song-id').innerHTML = '<div class="circle-waves"><i class="fa-solid fa-headphones"></i></div>'
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong',{
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this = this
        // Thả tim
        favIcon.onclick = function(e) {
            favIconActive.classList.toggle('cl-red')
        }

        // Tìm kiếm bài hát
        searchBox.onchange = function(e) {
            function removeSearchAccents(search) {
                return search.normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '')
                            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                            .replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")
                            .trim()
                            .replace(/ + /g," ")

            }
            const dataSearch = ((e.target.value).toString()).toUpperCase()
            let newSearch = removeSearchAccents(dataSearch)

            _this.songs.forEach(function(song, index) {
                const songUpper = ((song.name).toString()).toUpperCase()

                function removeSongAccents(song) {
                    return song.normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, '')
                                .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                                .replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ")
                                .trim()
                                .replace(/ + /g," ")

                }
                removeSongAccents(songUpper)
                
                let newSong = removeSongAccents(songUpper)
                console.log(newSearch,newSong)
                if(newSong.includes(newSearch)) {
                    _this.currentIndex = index
                    _this.render()

                    // Render để bài hát được active rồi mới load dữ liệu để play
                    _this.loadCurrentSong()
                    audio.play()
                } 
            })
        }

        // Khi Click Pause
        pauseBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause()
                _this.circleWavePause()
            }          
            _this.seekUpdate()
        }

        // Khi Click Play
        playBtn.onclick = function() {
            if (!_this.isPlaying) {
                audio.play()
                _this.circleWavePlaying()
            }          
        }

        // Khi Song Play
        audio.onplay = function() {
            _this.isPlaying = true
            _this.playingSong()
            _this.allSongMarqueePause()    
            _this.scrollToActiveSong()
        }

        // Khi Song Pause
        audio.onpause = function() {
            _this.isPlaying = false
            _this.pauseSong()
            _this.allSongMarqueePause()
        }

        // Next Song
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong()
                // Khi ấn Random sau đó ấn Next thì Song sẽ Play và gọi lại hàm PlayingSong
                _this.playingSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            // Render lại mỗi khi chuyển bài để Song được active
            _this.render()
            _this.circleWavePlaying()
            _this.scrollToActiveSong()
            _this.allSongMarqueePause()
            // Gọi lại hàm DarkMode() mỗi khi chuyển bài ở chế độ DarkMode
            darkMode()
        }

        // Prev Song
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong()
                // Khi ấn Random sau đó ấn Next thì Song sẽ Play và gọi lại hàm PlayingSong
                _this.playingSong()
            } else {
                _this.prevSong()
            }
            audio.play()
            // Render lại mỗi khi chuyển bài để Song được active
            _this.render()
            _this.circleWavePlaying()
            _this.scrollToActiveSong()
            _this.allSongMarqueePause()
            // Gọi lại hàm DarkMode() mỗi khi chuyển bài ở chế độ DarkMode
            darkMode()
        }

        // Random
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom
            randomIcon.classList.toggle('tool-atv', _this.isRandom)
        }

        // Repeat
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat
            repeatIcon.classList.toggle('tool-atv', _this.isRepeat)
        }

        // Khi bài hát kết thúc
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play()
                _this.playingSong()
                _this.circleWavePlaying()
            } else {
                nextBtn.click()
                _this.playingSong()
                _this.circleWavePlaying()
            }
        }

        // Tiến độ bài hát
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = audio.currentTime / audio.duration * 100
                time.value = progressPercent
                var x = time.value 
                var color = 'linear-gradient(90deg, var(--blue-color)' + x + '%, var(--main-background-color)' + x + '%)'
                time.style.background = color
                time.addEventListener('input', function() {
                    var x = time.value
                    var color = 'linear-gradient(90deg, var(--blue-color)' + x + '%, var(--main-background-color)' + x + '%)'
                    time.style.background = color
                })
            }
        }

        // Tua bài hát
        time.oninput = function(e) {
            const seekTime = Math.ceil(audio.duration / 100 * e.target.value)
            audio.currentTime = seekTime
            audio.play()
            _this.playingSong()
            _this.circleWavePlaying()
        }

        // Âm lượng Audio
        audio.volume = (volume.value) / 100
        volume.oninput = function(e) {
            audio.volume = (e.target.value) / 100
        }

        // Click chọn bài hát
        songList.onclick = function(e) {
            const songNode = e.target.closest('.song-items:not(.song--active)')
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.render()
                _this.loadCurrentSong()
                audio.play()
                _this.playingSong()
                darkMode()
                _this.scrollToActiveSong()
                _this.circleWavePlaying()
            }
        }
        
        // Click Volume to
        volumeHighBtn.onclick = function(e) {
            audio.volume = 1
            volume.value = 100
            var color = 'linear-gradient(90deg, var(--blue-color)  100%, var(--main-background-color)  100%)'
            volume.style.background = color
        }

        // Click Volume nhỏ
        volumeLowBtn.onclick = function(e) {
            audio.volume = 0
            volume.value = 0
            var color = 'linear-gradient(90deg, var(--blue-color)  0%, var(--main-background-color)  0%)'
            volume.style.background = color
        }
    },
    playingSong: function() {
        playBtn.classList.add('none')
        pauseBtn.classList.remove('none')
    },
    pauseSong: function() {
        playBtn.classList.remove('none')
        pauseBtn.classList.add('none')
    },
    circleWavePlaying: function() {
        $('.circle-waves').classList.add('circle')
    },
    circleWavePause: function() {
        setTimeout(function() {
            $('.circle-waves').classList.remove('circle')
        }, 100)
    },
    nextSong: function() {
        this.currentIndex++
            if (this.currentIndex >= this.songs.length) {
                this.currentIndex = 0
            }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.songs.length-1
            }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    seekUpdate: function() {
        // let seekPosition = 0;
        
        // Check if the current track duration is a legible number
        if (!isNaN(audio.duration)) {
        //   seekPosition = audio.currentTime * (100 / audio.duration);
        //   time.value = seekPosition;
        
          // Calculate the time left and the total duration
          let currentMinutes = Math.floor(audio.currentTime / 60);
          let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
          let durationMinutes = Math.floor(audio.duration / 60);
          let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);
        
          // Add a zero to the single digit time values
          if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
          if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
          if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
          if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        
          // Display the updated duration
          timeBegin.textContent = currentMinutes + ":" + currentSeconds;
          timeTotal.textContent = durationMinutes + ":" + durationSeconds;
        }
          
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song--active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            })
        }, 100)
    },
    allSongMarqueePause: function() {
        const songMarques = $$('.song-name marquee')

        songMarques.forEach(function(songMarque, i) {
            songMarque.stop()
        })
        
        $('.song--active marquee').start()
    },
    loadCurrentSong: function() {
        audio.src = this.currentSong.path
        clearInterval(updateTimer)

        updateTimer = setInterval(this.seekUpdate, 200)
        
        this.allSongMarqueePause()
    },
    playBtnWaves: function() {
        playBtn.classList.add('playBtn-waves')       
    },
    start: function() {
        // Render Song Title
        this.render()
        
        // Đ/n các thuộc tính cho Object
        this.defineProperties()
        
        // Hàm loadCurentSong phải nằm sau hàm defineProperties
        // Load Song
        this.loadCurrentSong()

        // Lắng nghe/xử lý các sự kiên
        this.handleEvents()
    }
}

// Start
app.start()

// Dark Mode
function darkMode() {
    const songActive = $('.song--active')
    const songItemsP = $$('.song-category p')
    const songIconActive = $('.song--active .song-id i')
    const circleWave = $('.circle-waves')
    const playerWave = $('.playBtn-waves')
    const mainBackgr = $('.main-background')
    const menuItems = $$('.menu-items')
    const suggestionArtistItems = $$('.suggestion-artist-items')

    if (darkModeInput.checked) {
        mainBackgr.style.backgroundColor = 'var(--purple-color)'
        mainTheme.classList.add('br-black')
        containerTheme.classList.add('br-blue')
        menuUser.style.borderTop = '2px solid var(--blue-color)'
        player.style.backgroundColor = 'var(--black-color)'
        search.style.backgroundColor = 'var(--black-color)' 
        searchInput.style.opacity = '1'
        searchInput.style.backgroundColor = 'var(--black-color)'
        circleWave.style.setProperty('--black-color','white')
        playerWave.style.setProperty('--black-color','white')
        songActive.style.backgroundColor = 'var(--black-color)'
        songIconActive.style.color = 'var(--white-color)'
        thumbnailBox.style.backgroundColor = 'var(--black-color)'
        allTagIcon.forEach(function(i) {
            i.style.color = 'var(--white-color)'
        })
        menuTagP.forEach(function(p) {
            p.style.color = 'var(--white-color)'
        })
        menuItems.forEach(function(item) {
            item.style.setProperty('--menu-hover-color','#092c3e')
        })
        suggestionArtistItems.forEach(function(item) {
            item.style.setProperty('--white-color','#15111e')
        })
        menuTagH4.forEach(function(h4) {
            h4.style.color = 'var(--white-color)'
        })
        menuTagH3.forEach(function(h3) {
            h3.style.color = 'var(--white-color)'
        })
        containerTagP.forEach(function(p) {
            p.style.color = 'var(--white-color)'
        })
        containerThemeH2.forEach(function(h2) {
            h2.style.color = 'var(--white-color)'
        })
        containerTitleTagP.forEach(function(p) {
            p.style.color = 'var(--white-color)'
        })
        containerTagLi.forEach(function(li) {
            li.style.color = 'var(--white-color)'
        })
        trendingContainerTagH2.forEach(function(h2) {
            h2.style.color = 'var(--black-color)'
        })
        songItemsP.forEach(function(p) {
            p.style.color = 'var(--white-color)'
        })
        playerTagIcon.forEach(function(i) {
            i.style.color = 'var(--white-color)'
        })
        playerNavFav.forEach(function(fav) {
            fav.style.backgroundColor = 'var(--blue-color)'
        })
        playerTagP.forEach(function(p) {
            p.style.color = 'var(--white-color)'
        })
        shortcutsTagBox.forEach(function(box) {
            box.style.backgroundColor = 'var(--black-color)'
        })
        suggestionTagP.forEach(function(p) {
            p.style.color = 'var(--white-color)'
        })
        shortcutsArtistTitle.forEach(function(p) {
            p.style.color = '#fff'
        })
        shortcutsArtistIcon.forEach(function(i) {
            i.style.color = '#fff'
        })
    } else {
        mainBackgr.style.backgroundColor = 'var(--main-background-color)'
        mainTheme.classList.remove('br-black')
        containerTheme.classList.remove('br-blue')
        menuUser.style.borderTop = '2px solid var(--main-background-color)'
        player.style.backgroundColor = 'var(--white-color)'
        search.style.backgroundColor = 'var(--white-color)' 
        searchInput.style.backgroundColor = 'var(--white-color)'
        circleWave.style.setProperty('--black-color','black')
        playerWave.style.setProperty('--black-color','black')
        songActive.style.backgroundColor = 'var(--white-color)'
        songIconActive.style.color = 'var(--black-color)'
        thumbnailBox.style.backgroundColor = 'var(--white-color)'   
        allTagIcon.forEach(function(i) {
            i.style.color = 'var(--black-color)'
        })
        menuTagP.forEach(function(p) {
            p.style.color = 'var(--black-color)'
        })
        menuItems.forEach(function(item) {
            item.style.setProperty('--menu-hover-color','rgba(0, 0, 0, .1)')
        })
        suggestionArtistItems.forEach(function(item) {
            item.style.setProperty('--white-color','#fff')
        })
        menuTagH4.forEach(function(h4) {
            h4.style.color = 'var(--black-color)'
        })
        menuTagH3.forEach(function(h3) {
            h3.style.color = 'var(--black-color)'
        })
        containerTagP.forEach(function(p) {
            p.style.color = 'var(--black-color)'
        })
        containerThemeH2.forEach(function(h2) {
            h2.style.color = 'var(--black-color)'
        })
        containerTitleTagP.forEach(function(p) {
            p.style.color = 'var(--black-color)'
        })
        containerTagLi.forEach(function(li) {
            li.style.color = 'var(--black-color)'
        })
        songItemsP.forEach(function(p) {
            p.style.color = 'var(--black-color)'
        })
        playerTagIcon.forEach(function(i) {
            i.style.color = 'var(--black-color)'
        })
        playerNavFav.forEach(function(fav) {
            fav.style.backgroundColor = 'var(--main-background-color)'
        })
        playerTagP.forEach(function(p) {
            p.style.color = 'var(--black-color)'
        })
        shortcutsTagBox.forEach(function(box) {
            box.style.backgroundColor = 'var(--white-color)'
        })
        suggestionTagP.forEach(function(p) {
            p.style.color = 'var(--black-color)'
        })
        shortcutsArtistTitle.forEach(function(p) {
            p.style.color = 'var(--black-color)'
        })
        shortcutsArtistIcon.forEach(function(i) {
            i.style.color = 'var(--black-color)'
        })
    }
}

// Volumn Range
volume.addEventListener('input', function() {
    var x = volume.value
    var color = 'linear-gradient(90deg, var(--blue-color)' + x + '%, var(--main-background-color)' + x + '%)'
    volume.style.background = color
})


