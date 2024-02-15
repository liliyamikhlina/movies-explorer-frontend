import "../../Movies/Movies.css";
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
          isLiked={false}
        />
      </article>
      <button className="cards__more cards__more_inactive ">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
