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
                margin-bottom: 10%;
            }

            .text-container {
                margin-right: 2rem;
            }    

            p {
                margin: 0;
            }

            @media (max-width: 1000px) {
                #desc-container {
                    flex-direction: column-reverse;
                    align-items: center;
                    text-align: center;
                }

                .image-container {
                    margin-bottom: 5%;
                }
            }
        `}</style>
    </div>
)

export default TechDesc