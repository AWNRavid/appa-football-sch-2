import LandingPageAppshell from "@/components/appshell/landing-page-appshell";
import { Slideshow } from "@/features/slideshow/component/Slideshow";
import TestimoniCarousel from "@/features/slideshow/component/TestimoniCarousel";
import Image from "next/image";

export default function Login() {
  return (
    <LandingPageAppshell>
      {/* start of image slideshow */}
      <section>
        <Slideshow />
      </section>
      {/* end of image slideshow */}

      {/* start of first big header */}
      <section className="bg-[#111111]">
        <div className="flex flex-row items-start gap-8 px-8 py-10">
          <div className="flex h-[700px] flex-1 items-center justify-center">
            <div className="h-full pt-10">
              <Image
                src="/logo.png"
                alt="logo"
                width={400}
                height={400}
                className=""
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between text-white">
            <div className="flex h-full w-[90%] flex-col justify-between gap-10">
              <h1 className="text-[52px] font-black uppercase">
                appa football school
              </h1>
              <p className="text-justify font-extralight">
                Merupakan sekolah sepak bola yang menggabungkan pelatihan
                sepakbola tradisional dengan teknologi canggih untuk
                meningkatkan keterampilan dan performa pemain. Siswa dapat
                memanfaatkan berbagai alat canggih yang biasa digunakan di
                akademi sepak bola modern untuk mendapatkan wawasan mendalam
                tentang teknik bermain mereka.
              </p>
              <p className="text-justify font-extralight">
                <span className="text-left font-bold">
                  APPA Football School
                </span>{" "}
                juga menyediakan program pelatihan yang disesuaikan dengan
                kebutuhan individu setiap pemain. Dengan pendekatan ini, pemain
                dapat mengembangkan keterampilan khusus yang dibutuhkan untuk
                posisi mereka dan meningkatkan kekuatan serta kelemahan mereka
                dengan lebih efisien.
              </p>
              <p className="text-justify font-extralight">
                Kombinasi dari metode pelatihan tradisional dengan inovasi
                teknologi membuat APPA Football School menjadi tempat yang ideal
                bagi pemain yang ingin mencapai potensi maksimal mereka dan
                bersaing di tingkat tertinggi dalam dunia sepakbola.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end of first big header */}

      {/* start of program latihan section */}
      <section className="space-y-28 bg-[#bb000e] px-20 py-28 text-white">
        <h1 className="text-center text-4xl font-black uppercase">
          program latihan
        </h1>
        <div className="flex flex-row justify-between gap-10">
          {[...Array(5)].map((_, index) => {
            return (
              <div
                className="flex flex-col items-center gap-10 rounded-3xl bg-black px-2 pb-32 pt-2 text-center"
                key={index}
              >
                <Image
                  src={"/banner-alt-1.png"}
                  alt=""
                  width={"350"}
                  height={"350"}
                />
                <div className="space-y-2">
                  <p className="text-xl font-bold uppercase text-[#bb000e]">
                    fun, play & move
                  </p>
                  <p className="font-bold">5 - 8 tahun</p>
                </div>
                <p className="font-light">
                  Pada kelompok ini, pemain dikenalkan tentang sepak bola dengan
                  cara memperbanyak sesi bermain dan menciptakan suasana agar
                  peserta merasa senang
                </p>
                <div className="mt-10 space-y-2 capitalize">
                  <p className="font-bold underline">program</p>
                  <div className="font-light">
                    <p>teknik dasar</p>
                    <p>circuit game</p>
                    <p>4v4 game</p>
                    <p>fair play</p>
                  </div>
                </div>
                <div className="mt-44">
                  <p className="font-light capitalize">sesi berlatih :</p>
                  <p className="font-bold capitalize">
                    minggu 07.00 - 08.30 WIB
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto w-fit cursor-pointer rounded-full bg-green-700 px-10 py-5 uppercase text-white transition-colors duration-300 ease-in-out hover:bg-green-800">
          daftar trial sekarang
        </div>
      </section>
      {/* end of program latihan section */}

      {/* start of fasilitas section */}
      <section className="space-y-28 px-40 py-72">
        <h1 className="text-center text-4xl font-black uppercase tracking-[.25em]">
          fasilitas
        </h1>
        <div className="flex flex-row justify-between gap-10">
          {[...Array(5)].map((_, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center space-y-28 text-center"
              >
                <Image
                  src="/fasilitas-1.png"
                  alt=""
                  width={350}
                  height={650}
                  className="rounded-2xl shadow-xl"
                />
                <div className="w-3/4 space-y-4">
                  <p className="text-xl font-bold capitalize">
                    pelatih berlisensi PSSI
                  </p>
                  <p className="text-base font-extralight capitalize">
                    Our data-driven analytics provide an in-depth look at every
                    play, allowing you to quickly assess, monitor, and improve
                    performance.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* end of fasilitas section */}

      {/* start of testimoni section */}
      <section className="relative space-y-10 overflow-hidden bg-[#111111] py-20 text-white">
        <h1 className="text-center text-4xl font-black uppercase tracking-[.25em]">
          testimoni
        </h1>
        <TestimoniCarousel />
        <div className="absolute right-[-25%] top-0 h-full w-1/2">
          <Image
            src={"/logo.png"}
            alt=""
            fill
            className="opacity-15"
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
      {/* end of testimoni section */}

      {/* start of informasi & berita section */}
      <section>
        <h1>informasi & berita</h1>
      </section>
      {/* end of informasi & berita section */}
    </LandingPageAppshell>
  );
}
