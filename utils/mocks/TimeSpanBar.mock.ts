import { TimeSpanBarProps } from "../../components/TimeSpanBar/TimeSpanBar";

export const KHRUSHCHEV_LIFE_BAR: TimeSpanBarProps = {
  header: "Хрущёв, Никита Сергеевич",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Bundesarchiv_Bild_183-B0628-0015-035%2C_Nikita_S._Chruschtschow.jpg?uselang=ru",
  start: {
    date: new Date("1894-04-15"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  end: {
    date: new Date("1971-09-11"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  events: [
    {
      name: "Event 1",
      info: {
        date: new Date("2024-02-15"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/NikitaNina.JPG/440px-NikitaNina.JPG",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Event 2",
      info: {
        date: new Date("2024-04-20"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Joseph_Stalin_and_Nikita_Khrushchev%2C_1936.jpg/440px-Joseph_Stalin_and_Nikita_Khrushchev%2C_1936.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Event 3",
      info: {
        date: new Date("2024-06-10"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/dc/Nikita_Khrushchev-TIME-1953.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Event 4",
      info: {
        date: new Date("2024-08-30"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/NikitaNina.JPG/440px-NikitaNina.JPG",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Event 5",
      info: {
        date: new Date("2024-10-15"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/NikitaNina.JPG/440px-NikitaNina.JPG",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};

export const PINK_FLOYD_LIFE_BAR: TimeSpanBarProps = {
  header: "Pink Floyd",
  image: "https://en.wikipedia.org/wiki/File:Pink_Floyd_-_all_members.jpg",
  start: {
    date: new Date("1965-01-01"),
  },
  end: {
    date: new Date("1985-01-01"),
  },
  events: [
    {
      name: "Formation",
      info: {
        date: new Date("1965-02-15"),
        location: {
          name: "London",
          latitude: 51.5074,
          longitude: -0.0799,
        },
        image:
          "https://media.pitchfork.com/photos/592f53a09937e767378adf04/2:1/w_2240,c_limit/ea5185fb.jpg",
      },
    },
    {
      name: "A Saucerful of Secrets",
      info: {
        date: new Date("1968-02-15"),
        location: {
          name: "London",
          latitude: 51.5074,
          longitude: -0.0799,
        },
        image:
          "https://upload.wikimedia.org/wikipedia/en/5/54/Saucerful_of_secrets2.jpg",
      },
    },
    {
      name: "The Dark Side of the Moon",
      info: {
        date: new Date("1973-03-01"),
        location: {
          name: "London",
          latitude: 51.5074,
          longitude: -0.0799,
        },
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
      },
    },
    {
      name: "Wish You Were Here",
      info: {
        date: new Date("1975-09-12"),
        location: {
          name: "London",
          latitude: 51.5074,
          longitude: -0.0799,
        },
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/8c/Wish_you_were_here_by_Pink_Floyd_banner.png",
      },
    },
    {
      name: "Animals",
      info: {
        date: new Date("1977-01-21"),
        location: {
          name: "London",
          latitude: 51.5074,
          longitude: -0.0799,
        },
        image:
          "https://upload.wikimedia.org/wikipedia/en/7/74/Pink_Floyd-Animals-Frontal.jpg",
      },
    },
    {
      name: "The Wall",
      info: {
        date: new Date("1979-11-30"),
        location: {
          name: "London",
          latitude: 51.5074,
          longitude: -0.0799,
        },
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/PinkFloydWallCoverOriginalNoText.jpg/440px-PinkFloydWallCoverOriginalNoText.jpg",
      },
    },
    {
      name: "The Final Cut",
      info: {
        date: new Date("1983-03-21"),
        location: {
          name: "London",
          latitude: 51.5074,
          longitude: -0.0799,
        },
        image:
          "https://upload.wikimedia.org/wikipedia/en/e/e4/FloydFC-Cover01.jpg",
      },
    },
  ],
};
