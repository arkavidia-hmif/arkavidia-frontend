import * as React from 'react'

const TechDesc : React.FC = () => (
    <div id="desc-container">
        <div className="text-container">
            <p>
                Technocamp merupakan sebuah acara akademik IT 
                untuk murid-murid SMA/Sederajat. Technocamp kali ini akan memberikan pembelajaran mengenai dasar-dasar 
                dalam pemrograman. Peserta akan dibimbing secara langsung oleh mentor-mentor dari mahasiswa 
                Program Studi Teknik Informatika dan Sistem dan Teknologi informasi ITB selama rangkaian acara Technocamp 
                berlangsung.
                <br/>
                <br/>
                Technocamp akan diadakan dalam 4 hari yang akan dilaksanakan pada Sabtu dan Minggu selama 2 minggu 
                berturut-turut. Selama 4 hari kegiatan Technocamp, peserta akan diajarkan ilmu-ilmu dasar terkait 
                pembuatan program sederhana dimulai dari fondasi dari program itu sendiri hingga membuat program 
                sederhana secara mandiri yang akan dipandu oleh mentor. Technocamp ini bisa menjadi salah satu langkah 
                awal bagi para peserta dalam mengenal dunia pemrograman.
            </p>
        </div>
        <div className="image-container">
            <img src="/img/pre-event/technocamp/technocamp1.png" alt="camp"/>
        </div>
        <style jsx>{`
            #desc-container {
                display: flex;
                height: 60vh;
            }

            .text-container {
                margin-right: 2rem;
            }    

            p {
                margin: 0;
            }
        `}</style>
    </div>
)

export default TechDesc