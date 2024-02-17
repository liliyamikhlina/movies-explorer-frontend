import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="cards">
      <article className="cards__box">
        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fuUYysrW-KecsNVe4gaaXvWG753UwzqYwYJIOjAm~Mh5SmOOg~nIMKn-STy7jhk4HGtVthcvi9Rpy8sUpZcOaq6bOhz0~fd0JJS6Ej8VvD-N7oz17F~T0fdV02h0s39UNxI2Uu0CW8wPuCU5RQjCQBI7eYCKQxS8BCNqLGK2PYrYjXAxymb4yZRuOD3zE0CYqXDYssesYsht5riv1vUYelVMA44dpkrf5VhtkLF5gbTDRJrvpVcf1HNH~OPEPgTnncg5O4FWbqRk1wx5j0SOaN73AEUo7R0zvfEVvSsG9igyURmVP9ujFzWtfrgt71ciJ~wjUuvEXrneRa1v-LeO1g__"
          }
          name={"33 слова о дизайне"}
          duration={"1ч 40м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/90ba/2e4b/e072f3f38937c7f5d592d64f3fa59f33?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAErtW05xBwhXtt9iYl6N6Nv~Da13Xt7OhwRrDPgxlTbF2nyRFj~NTJggtLk-Nb8~5Xd5QALbkFbLF-MQXA4A9D351hepuK9Wz5nAfY9YXdtzfgYXrR96HaBli7pwhW1DbnGbBmOHrRtor7-hG8HFMDgoy4Bz4uTymwLVtz4ZFvk2FiNPpXCocfmj91j2oDobkJdwYRpoxeQOJryWv4h5KtDVn7N~tnUsJ8YJPBVgDafavXpsNREvG3SBrVwtKxKzZGd34ZL~G5PA0A6-UkKQV49oe0zD9OQS1WXe1qaDB2ghNBlFkEMOkEj7N5-Rc~azbtthforHKidGmUhPjI7Tg__"
          }
          name={"Киноальманах «100 лет дизайна»"}
          duration={"1ч 48м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/7501/fcae/58fcf299e5a04c29cb37e6280c83da16?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E1DXYEIhkRQ1qysfXDB3r45OlaX-O9u7sW6DBjreEnHfB3C9yPcPhg2W5be1P09~Rr3tAhY2NkvLgWIudxoOPuytvcSjC2c5EW7Egzsp77NmHHtUE1dfL54Fpfw7P7uYaao2fg4mjmV5WQdPTgwLt5xwR219kEW8z6JECWhSLYTcyf6CrhgXpWm2GENIVZQZSKp1U5CrDZZmHi2qckHvcugI-KHxr0bHk9vOE22~~FwUjBGXRKuk1aA06s0fI4dX3zIMu-5X9YJqjEWKfoA1l4vXK8wsVTshtXkM-cICa3FJs6BHnHrlfUEytNkuF9UcGNISzoN60CI6sKTofPydXQ__"
          }
          name={"В погоне за Бенкси"}
          duration={"1ч 22м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/96cc/9d30/2e6653f8a2dbac83b4795cc1e846a243?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hvEgEPUAv0aCcJWburIcAKyfaNH6I8vc0MTyXqlt6HNlWDkUWPjOBCPp-9CxwY7Q23Q4PrDfm2Q49hIwgklwnLdFtWLyhuzggiGpWsGian4T-UinoQqwdcjRHWUK5~qST75RqwEfDKCR8X6HABnYXKx~rw~~fcRl-uY9Nj7yw9maZkhdrx2s0U8X~EFXdDc-UpIqBbaHYoeGkR3tOlDFRW8Id2FipbuPwjcNHY3cAdxYLPdXw9rgmCFpixbbuWFqoVo7CRz6cQYbE7X8EKLnnq44TosP0QteV4XNbzr5BWaxdPKYeGDM9wuX645FEmivji3CO85bBAWUfpo8KXTIgg__"
          }
          name={"Баския: Взрыв реальности"}
          duration={"1ч 18м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/b5e4/a6cb/ff07e856bc14f2c67fd3d453609875e8?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVAhborhKkK8W~WDaEawypO6s50Kig9RqXsiJ1RmZe6q5APCMX70Yu6KjICxthwFP25Ij1tJJlguoTjhybBnCROQKulTudGiP9HnrUMKB1VdAJsORPQyrQindsDKQX~WQ0BFKOE8SrJIrlvgBIIofXM5~hnPRIB~P1OSRtMNmMknXDWfk8lvBkCVV5uWYxuFwbSfiFP4o2sG1VkmM~j4Lhvw3efGAwq3U6kfmARfGdqBwcEJlL9Lq~Pbmdkv0e-ZDC-QNoc3FOckhieka8XqAop1xQBfMoffe-OEzdh~aLV1LhFqQDXiItvXHk-jS9VG3XkhmF6tAlbqMAPto98aBA__"
          }
          name={"Бег это свобода"}
          duration={"1ч 30м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/199d/35fd/ed1213c8b6d45652874df917fdcefb3b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYGHbY6ZzRk-HcR9dbHfxpMUYgZ6to0eWq1jA0GngbItbQAYqkTfqwRRRQ8naqR1dF~jn7mIo9NBj1iBzKVpQhyJwqePaqnbWZAXzQV03~NskUJlkWwNGiluyMNzQbv~Aa~dYX~HvIgH3Sa12O-d~1QppcFoNUNOnBtFohluDfjcagWiSkLFxlkZX-O4mLlm5T5a7qGzNiUCeq1d7Nb9pro7TAPqX2hslBf4iH0BS2sSIuk0PMzDwmBffV4smpJ~1hdk~5GZlBM~RyhfwPyRNOkigO1s0stV-dFPDpXW5IYwGLmjvWpGhkwqQNGrvyQGtPsfVONlDkbr9xNqAS7-~A__"
          }
          name={"Книготорговцы"}
          duration={"1ч 39м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/16ca/4833/dee0e587ee02e0b9181fbac58ce0aeee?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P3pqkAfjlEVDrxUXpS0cJ1ypoE9HiTz5A7S4jKiMcrhVhUu2vfvpwQchZBI~Hfn-0SlxLzytsXZNOIQRrK6AI3aAFZFhZPODW~A6h1~Dn28UUeqHYr8ZdYFs9wePjiKbp5ZdMqVNNZhsxL4SMflFJ1VjdhEG3Zksx0JtV9ep9N7NYe0G6N3hRLT4Nw2dwYp3K7OQW1l67vLGoZUH2xDqTg7FAC~bprAK62KUAICcsiIgcQhJbXAmam2bUjqq-l3uhBn04e8N0Vx1rHIGAl9jF4dvNUTGur-7dJCW1PHaBevpBTK9P1BbQ2~lX2pFplCl0~YdOUAFcba5hmXGhJwp-A__"
          }
          name={"Когда я думаю о Германии ночью"}
          duration={"1ч 45м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/db51/87fa/f8c41998d6d82176e93f868814bf1d2b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XySAAljBeb~rZ5I9IMlLs2z~D~yzn3hi7OaloTWJr5e10ri~RE5XVXeCed8GnX~meeWgZsb5xpA4spXOsu~pAYEimlZYKokYsuDLevmgvqWo9c8570seo0EBZ5MxQaJjMurPw6wINOX4mjesYyT5GqhXXhv6nlwpsCkk-vqCx-ymTWVqMEEH-gJ7NJO9vOO7SxzYsOEbJuoMNg~giVLhdjV-ijWWEFs2b~uB~TGueDujfHUP-h6Q3zF10m9srTWFC5mw6--3BVxylh1eUUHbQ3n3IuYwW2c8~oA8EaikyXqVA7CJY~rtMY4ETCaIb-sF-wE-tA74jJhFrg4KXgCuoQ__"
          }
          name={"Gimme Danger: История Игги и The Stooges"}
          duration={"1ч 48м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/8604/c3a8/492a130e904f2edf96264863e930e51f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X~iZnvE9XreyOn9ay2IJ0JLtVqEvNzxjxQUL6HEHYteqoKkreOMOP1wrL4jvraxt4m~snAq~AASE9d14GhOLpyipMN1YdMDp6bCzeA39EIGoDZWGgPYA~zL~FYbkThd21LQ~X2gbnJlN1IYT3DviaVaKKsePQGSwroq8F1o-MCgbdYrQ25uCmO4nwwlE0-rRvQgg4eCIFxHCPmoZcKb9tKCjaFCgup0RVOpNsiJb~OSgVTwdKrSbsJhOMruX3-nvfM3S7fa6Hy6eLpsJp7AR6isQFWkltrOwRPc9SAPUaPH9YsUOLleUgxwMssWLMXXsydkheI26HmsslM2ueGyGXQ__"
          }
          name={"Дженис: Маленькая девочка грустит"}
          duration={"1ч 43м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/532b/0b33/a7e2023e9428929e8632172735ff18f5?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qga0ytj5G6TmRnf~WzDzOpM5PengMbk~njo8~YNtfW3cAVNZHupjEUn-AaidgXfcwd09fXhivic1p8rxELYWSgYShLgxNA4AEmJKuwMETqbVOxlWi2rThhY-tW1BTOEKrhXlpQDxX3xPdLHur-nisZ8vAa30hxSIIQ2nv~ceLWQ~kPtPuHbj4fgNlYHkyy4yDuAtJv5tOVAPWOOahKMmJA~5a6fJKumI34PnDoU2pmMpoxB0DFoN8vLj7YArrJKgcI~QIgkXebPZtfsMCugJLjwcbivA7wz2BoVrC~qZLrmEFgph5CHLTcWl14umv8NdO0lKzyd6cmUOQrV-PfI9CA__"
          }
          name={"Соберись перед прыжком"}
          duration={"1ч 33м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/ff18/63df/9c469b036f5505dd9a947241f21f8245?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TOkJ1ebRIEEof6Y2IHs0BZ0lIc95jqq4cSDy0vusOaiYP4pRnkgSCI38GW3g~KnRIpvKZrRVzeScmyVJhEDY1VUyrY-vP68OFP34j3rq4D1OdOSijpDzJgFqVGip1SaDdR56YJMR6JjVS4CPY6587N9Smr~MITXxhOAvRtbixehoJra5yCsKmU2guNdgpgY7z8txnfKEDiNCCmQPaONfC~C0-g~1HuEI6tiDR7skKDjvbZJtgP0syvOWUKcNiVuFsStcFUaO4iMp0Le-7j2m~--DbqaFZaeCKy2c~3A9mNEzl-uNI1oLE0dvTiL4yJc36Lzr~~xvwMasjdsC7tfCBA__"
          }
          name={"Пи Джей Харви: A dog called money"}
          duration={"1ч 34м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/9f37/4383/9cbecda3e33558c8bfcc052f8002c008?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FyW3vwrIUE5t~9NcidxgBQX6aLRJdFXv74ViJwAy5VzyvkGH~8f2N4csOTC1MCEXkfJgDRJzcM5YwdMDftaLBkie2ceNPa5HscMbmnnb81-2y76tvfjrOpbyYDgZx94DgL3vrw~~vzbgoOHOFmvR~sAaAJxuY26PIF2RlTULqi-1DRYekiVeG5Uyg3A1U-2UI0FcLbCkikkzXX2S8ypag4U0RuyKkWT-4vattVeH~4wXc1dY~w7a5MgGjhc2mQi0EgPPNbt5pddVz9sSBgmtP33cs~J~WD3DL3ozyWY3Mw-zyl4ct~p5X-J52DnAPqSiN3DR1TX56PDlYt7d6ZwTQw__"
          }
          name={"По волнам: Искусство звука в кино"}
          duration={"1ч 34м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/15e7/907e/a155d35bb2900a7523c41e586e62a5a7?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzW8JlyzeVxv4HLrrX2PwClNvjQz0JDt3QfLZMlbXYKZ1GdCAsVLOqti5iDmtnKgQx6FMlfun~ZI0qf8TSk9TrME7DCWdphayyhr-Ro63ojmTR3-p-5p6X-q0HA~anhXc50gq0M63XAc7C4yUcZcgKcukY66Ayf7ztVruwpjVMjAyqZDjbYrxmzX~wKA-cm1iRf2k1xpdL8hREscdQhPLtOcuBgO5WaLY5FgEI1zGnexFwbDQy5LH-59WsUXp10GmtwL4hXu7H-HqT~~Ppixn-Lgv8j-Rt~J8yFU-PTmYKqs10EBA7cLh2V9yAM04gxywXRu7zsKPEXiuzkb14U6Pg__"
          }
          name={"Рудбой"}
          duration={"1ч 25м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/6380/fa53/8ad8f141ae7babcf9a109cb6e6f760e7?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ThQiljVTKrp5PwhBr31psibh7ldgHTiXLT2guNESgwPM9WGQm0l1MDYe7ypltsmzTIiyeAynrtsBYOoPVkeKr56ZedblK8Cu3IxFgDMiSXwGF~LRA~5h0Ytwi5J6Oi0t0wsIVugcCTSkTDvLkxQnxI~Z5GjtW5bw-QELppQCyuGc8DndQzX6IpfQUnC6t~9gf7cLbty-h7qrSQZIDa1MVvg~-ar9E3YqlKetHZEoypH6FKPKnd9BpyVn9OVOsgNzSH3G2SCPetkRPyCKREllVRF7moY0ni0uSHDV3wGe8CviObN4jK7u2yS8THvzPFMpbWDuKvsRQbpUgBeIVrtDvw__"
          }
          name={"Скейт — кухня"}
          duration={"1ч 46м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/ab88/283d/4aab68a30ea43a46bde9dae287117202?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fijIl1GF1HURl1YgOOatlDmMDu9NPcE3LjBgORRdUK9n3Sg15EEsOp6UJhMyzNFXXEMcpTdftcyou9fgP53qZ8CIU0g7E3afPhNygcDJiM0vdYn0kLwdfqcE3t-3tHplYMv4gMJBGRjz4PeTx-scaDDsmeR2X2aSHeleIiQib3XuyMxd2yAX4dOPkMyfptMqh2kyeNyA4k1VJWdvPB4EhBRvwKydr2njmJEkoRCG-5EKwbbmjnIwpGUkFq9c09sM3aRwO0bQmFkT7URSz7fb-bSpJ8TIVT-HVBGb5DZ6u-igCYuUqxtk3hqzRFf0KamzsKP5JxwUxSnohAKhQOPN9w__"
          }
          name={"Война искусств"}
          duration={"1ч 42м"}
        />

        <MoviesCard
          link={
            "https://s3-alpha-sig.figma.com/img/55cf/5d6f/979762a87e125d70efcb27da8d89c745?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HQGxi2CC~9lUAH7~xe6Fm~kUxh~Lm-1j6t~TWbJNVpnsA5dPB4vwDOs9EWvxx93IUxqO7G85u~utZR1mZPUHfLPnBmk8Py8QM79wbTfC~SmhsbXf61O66NNkXw3w2eGkZ1lnexlmBHBxuOa98bPOnxrCprnTJOc9b6tqMM8g0CZwwvtAVFfs2Lxy5BDMMyN94WogpLLzXP3tSD5-zrVBppvofdZJ1r4R8z~SUhkcEoEGSYEkHw2Cr3OuTKMsChsRqN6MLXEA9qxlhuBvcq5GaMq0tO1jfZLYzaU6xcNRxncc3SS2edojl9V~V-wx0BSexJgH8Z-gKr9c2R~PNBnq9w__"
          }
          name={"Зона"}
          duration={"1ч 3м"}
        />
      </article>
      <button className="cards__more">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
