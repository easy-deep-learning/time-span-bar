import { TimeSpanBarProps } from "../../components/TimeSpanBar/TimeSpanBar";

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

export const LENIN_LIFE_BAR: TimeSpanBarProps = {
  header: "Ленин, Владимир Ильич",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Fligelhouse.JPG?uselang=ru",
  start: {
    date: new Date("1870-04-22"),
    location: {
      name: "Simbirsk",
      latitude: 54.3167,
      longitude: 48.3667,
    },
  },
  end: {
    date: new Date("1924-01-21"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  events: [
    {
      name: "Early life in Simbirsk",
      info: {
        date: new Date("1870-04-22"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lenin-circa-1887.jpg",
        location: {
          name: "Simbirsk",
          latitude: 54.3167,
          longitude: 48.3667,
        },
      },
    },
    {
      name: "Execution of brother",
      info: {
        date: new Date("1887-05-20"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/Oreshek_fortress_Ulyanov.jpg",
        location: {
          name: "Saint Petersburg",
          latitude: 59.9343,
          longitude: 30.3351,
        },
      },
    },
    {
      name: "Exile to Siberia",
      info: {
        date: new Date("1897-02-13"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/90/Union-de-Lucha.jpg",
        location: {
          name: "Shushenskoye",
          latitude: 53.325,
          longitude: 91.9356,
        },
      },
    },
    {
      name: "What Is To Be Done?",
      info: {
        date: new Date("1902-03-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/What_is_to_be_Done.jpg/1024px-What_is_to_be_Done.jpg",
        location: {
          name: "Munich",
          latitude: 48.1351,
          longitude: 11.582,
        },
      },
    },
    {
      name: "Return to Russia",
      info: {
        date: new Date("1917-04-16"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lenin_Sealed_Train_Map-en.svg/1280px-Lenin_Sealed_Train_Map-en.svg.png",
        location: {
          name: "Petrograd",
          latitude: 59.9343,
          longitude: 30.3351,
        },
      },
    },
    {
      name: "October Revolution",
      info: {
        date: new Date("1917-11-07"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Brodskiy%27s_Lenin.jpg/1024px-Brodskiy%27s_Lenin.jpg",
        location: {
          name: "Petrograd",
          latitude: 59.9343,
          longitude: 30.3351,
        },
      },
    },
    {
      name: "New Economic Policy",
      info: {
        date: new Date("1921-03-21"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/87/Chervonetz_1922.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Death and funeral",
      info: {
        date: new Date("1924-01-21"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Lenin%27s_funerals_by_I.Brodsky_%281925%29_detail_01.jpg/1920px-Lenin%27s_funerals_by_I.Brodsky_%281925%29_detail_01.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};

export const STALIN_LIFE_BAR: TimeSpanBarProps = {
  header: "Сталин, Иосиф Виссарионович",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Stalin_1920-1.jpg/1024px-Stalin_1920-1.jpg",
  start: {
    date: new Date("1878-12-18"),
    location: {
      name: "Gori",
      latitude: 41.9842,
      longitude: 44.1158,
    },
  },
  end: {
    date: new Date("1953-03-05"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  events: [
    {
      name: "Birth and early life",
      info: {
        date: new Date("1878-12-18"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Stalin_house_museum_in_Gori.jpg/800px-Stalin_house_museum_in_Gori.jpg",
        location: {
          name: "Gori",
          latitude: 41.9842,
          longitude: 44.1158,
        },
      },
    },
    {
      name: "Tiflis Seminary",
      info: {
        date: new Date("1894-09-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Tbilisi_Spiritual_Seminary.jpg/1024px-Tbilisi_Spiritual_Seminary.jpg",
        location: {
          name: "Tbilisi",
          latitude: 41.7151,
          longitude: 44.8271,
        },
      },
    },
    {
      name: "First arrest",
      info: {
        date: new Date("1902-04-05"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Batumi_prison.jpg/1024px-Batumi_prison.jpg",
        location: {
          name: "Batumi",
          latitude: 41.6458,
          longitude: 41.6417,
        },
      },
    },
    {
      name: "October Revolution",
      info: {
        date: new Date("1917-11-07"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Stalin_1917.jpg/1024px-Stalin_1917.jpg",
        location: {
          name: "Petrograd",
          latitude: 59.9343,
          longitude: 30.3351,
        },
      },
    },
    {
      name: "General Secretary",
      info: {
        date: new Date("1922-04-03"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Stalin_1922.jpg/1024px-Stalin_1922.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "First Five-Year Plan",
      info: {
        date: new Date("1928-10-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Magnitogorsk_steel_plant.jpg/1024px-Magnitogorsk_steel_plant.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Great Patriotic War",
      info: {
        date: new Date("1941-06-22"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Stalin_1943.jpg/1024px-Stalin_1943.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Victory Parade",
      info: {
        date: new Date("1945-06-24"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Victory_Parade_1945.jpg/1024px-Victory_Parade_1945.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Last public appearance",
      info: {
        date: new Date("1952-10-14"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Stalin_1952.jpg/1024px-Stalin_1952.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Death and funeral",
      info: {
        date: new Date("1953-03-05"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Stalin_funeral.jpg/1024px-Stalin_funeral.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};

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
      name: "Early life",
      info: {
        date: new Date("1894-04-15"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/66/Kurskaja.jpg",
        location: {
          name: "Kalinovka",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Donbas years",
      info: {
        date: new Date("1916-02-15"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/1916._Khrushhev-s-zhenojj-efrosinejj.jpg/440px-1916._Khrushhev-s-zhenojj-efrosinejj.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Involvement in purges",
      info: {
        date: new Date("1932-04-20"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Joseph_Stalin_and_Nikita_Khrushchev_1930s.jpg/520px-Joseph_Stalin_and_Nikita_Khrushchev_1930s.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "World War II",
      info: {
        date: new Date("1939-09-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c6/Nikita_Khrushchev_in_WW2.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Stalin's final years",
      info: {
        date: new Date("1949-12-15"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mao%2C_Bulganin%2C_Stalin%2C_Ulbricht_Tsedenbal.jpeg/620px-Mao%2C_Bulganin%2C_Stalin%2C_Ulbricht_Tsedenbal.jpeg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Struggle for power",
      info: {
        date: new Date("1953-03-05"),
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
      name: "On the Cult of Personality and Its Consequences",
      info: {
        date: new Date("1956-02-14"),
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnovayagazeta.ru%2Fstatic%2Frecords%2Fe2bfa2b6ecf44d3dbb21631e0b0490f5.jpeg&f=1&nofb=1&ipt=825f98afe130def6f09a0489768b9d3d36794e25190c9d9527bd7b2c22cbdc60&ipo=images",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "U-2 and Berlin crisis",
      info: {
        date: new Date("1961-08-13"),
        image:
          "https://cdn.aussiedlerbote.de/wp-content/uploads/2022/04/Mauer.jpg?&format=webp&width=1200&quality=25",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Cuban Missile Crisis and the test ban treaty",
      info: {
        date: new Date("1963-07-20"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/John_Kennedy%2C_Nikita_Khrushchev_1961.jpg/440px-John_Kennedy%2C_Nikita_Khrushchev_1961.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Death",
      info: {
        date: new Date("1971-09-11"),
        image:
          "https://historicus.media/assets/images/nadgrobnii_pamyatnik_Hrushevu.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};

export const LEONID_BREZHNEV_LIFE_BAR: TimeSpanBarProps = {
  header: "Леонид Брежнев",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg/440px-Staatshoofden%2C_portretten%2C_Bestanddeelnr_925-6564.jpg",
  start: {
    date: new Date("1906-12-19"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  end: {
    date: new Date("1982-11-10"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  events: [
    {
      name: "Born",
      info: {
        date: new Date("1906-12-19"),
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/84/Илья_Яковлевич_Брежнев_–_отец_Леонида_Ильича.jpg",
      },
    },
    {
      name: "Учёба и опыт работы",
      info: {
        date: new Date("1927-06-22"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0b/Л._И._Брежнев_с_женой_Викторией%2C_1927_год.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Военные годы",
      info: {
        date: new Date("1942-06-22"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Л._И._Брежнев_–_курсант_Забайкальской_бронетанковой_школы._1936_год.jpg/360px-Л._И._Брежнев_–_курсант_Забайкальской_бронетанковой_школы._1936_год.jpg",
      },
    },
    {
      name: "Смещение Хрущёва",
      info: {
        date: new Date("1964-10-14"),
        image:
          "https://novayagazeta.ru/static/records/cfea986deeaf4ab58f1549812860e4d3.webp",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Экономическая реформа",
      info: {
        date: new Date("1965-01-01"),
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars.dzeninfra.ru%2Fget-zen_doc%2F168279%2Fpub_6204cb498667d266fb5ce3c7_62060d99d81dfc4dddaa3da7%2Fscale_1200&f=1&nofb=1&ipt=e835766a99b24ae58a50d84dff41aedb8cb1e491c757b7cdaa959c0d217ae211&ipo=images",
      },
    },
    {
      name: "Ввод войск в Чехословакию",
      info: {
        date: new Date("1968-08-20"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Praga_11.jpg/600px-Praga_11.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Разрядка международной напряжённости",
      info: {
        date: new Date("1972-09-15"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Richard_M._Nixon_and_Leonid_Brezhnev_aboard_the_Sequoia_-_NARA_-_194518.tif/lossy-page1-2880px-Richard_M._Nixon_and_Leonid_Brezhnev_aboard_the_Sequoia_-_NARA_-_194518.tif.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Период застоя",
      info: {
        date: new Date("1974-01-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/b8/Brezhnev-color.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Афганская война",
      info: {
        date: new Date("1979-12-24"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d8/Устинов_и_Брежнев.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Олимпиада-1980",
      info: {
        date: new Date("1980-07-19"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Emblem_of_the_1980_Summer_Olympics.svg/219px-Emblem_of_the_1980_Summer_Olympics.svg.png",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Death",
      info: {
        date: new Date("1982-11-10"),
        image:
          "https://upload.wikimedia.org/wikipedia/ru/f/fb/Похороны_Брежнева.png",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};

export const GORBACHEV_LIFE_BAR: TimeSpanBarProps = {
  header: "Горбачёв, Михаил Сергеевич",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mikhail_Gorbachev_1987.jpg/1024px-Mikhail_Gorbachev_1987.jpg",
  start: {
    date: new Date("1931-03-02"),
    location: {
      name: "Privolnoe",
      latitude: 45.9167,
      longitude: 41.5833,
    },
  },
  end: {
    date: new Date("2022-08-30"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  events: [
    {
      name: "Birth and early life",
      info: {
        date: new Date("1931-03-02"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gorbachev_birthplace.jpg/1024px-Gorbachev_birthplace.jpg",
        location: {
          name: "Privolnoe",
          latitude: 45.9167,
          longitude: 41.5833,
        },
      },
    },
    {
      name: "Moscow State University",
      info: {
        date: new Date("1950-09-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Moscow_State_University_main_building.jpg/1024px-Moscow_State_University_main_building.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "General Secretary",
      info: {
        date: new Date("1985-03-11"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mikhail_Gorbachev_1987.jpg/1024px-Mikhail_Gorbachev_1987.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Perestroika",
      info: {
        date: new Date("1986-02-25"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Perestroika_1986.jpg/1024px-Perestroika_1986.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Chernobyl disaster",
      info: {
        date: new Date("1986-04-26"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Chernobyl_reactor_after_disaster.jpg/1024px-Chernobyl_reactor_after_disaster.jpg",
        location: {
          name: "Chernobyl",
          latitude: 51.389,
          longitude: 30.0994,
        },
      },
    },
    {
      name: "Fall of Berlin Wall",
      info: {
        date: new Date("1989-11-09"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Berlin_Wall_1989.jpg/1024px-Berlin_Wall_1989.jpg",
        location: {
          name: "Berlin",
          latitude: 52.52,
          longitude: 13.405,
        },
      },
    },
    {
      name: "Dissolution of USSR",
      info: {
        date: new Date("1991-12-26"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Soviet_Union_flag_lowering.jpg/1024px-Soviet_Union_flag_lowering.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Death",
      info: {
        date: new Date("2022-08-30"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mikhail_Gorbachev_2019.jpg/1024px-Mikhail_Gorbachev_2019.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};

export const ANDROPOV_LIFE_BAR: TimeSpanBarProps = {
  header: "Андропов, Юрий Владимирович",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yuri_Andropov_1983.jpg/1024px-Yuri_Andropov_1983.jpg",
  start: {
    date: new Date("1914-06-15"),
    location: {
      name: "Nagutskoye",
      latitude: 44.4417,
      longitude: 43.8833,
    },
  },
  end: {
    date: new Date("1984-02-09"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  events: [
    {
      name: "Birth",
      info: {
        date: new Date("1914-06-15"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yuri_Andropov_young.jpg/1024px-Yuri_Andropov_young.jpg",
        location: {
          name: "Nagutskoye",
          latitude: 44.4417,
          longitude: 43.8833,
        },
      },
    },
    {
      name: "Komsomol work",
      info: {
        date: new Date("1936-01-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Komsomol_badge.jpg/1024px-Komsomol_badge.jpg",
        location: {
          name: "Yaroslavl",
          latitude: 57.6261,
          longitude: 39.8875,
        },
      },
    },
    {
      name: "Hungarian Revolution",
      info: {
        date: new Date("1956-10-23"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Hungarian_Revolution_1956.jpg/1024px-Hungarian_Revolution_1956.jpg",
        location: {
          name: "Budapest",
          latitude: 47.4979,
          longitude: 19.0402,
        },
      },
    },
    {
      name: "KGB Chairman",
      info: {
        date: new Date("1967-05-18"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/KGB_badge.jpg/1024px-KGB_badge.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "General Secretary",
      info: {
        date: new Date("1982-11-12"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yuri_Andropov_1983.jpg/1024px-Yuri_Andropov_1983.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Death",
      info: {
        date: new Date("1984-02-09"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Andropov_funeral.jpg/1024px-Andropov_funeral.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};

export const CHERNENKO_LIFE_BAR: TimeSpanBarProps = {
  header: "Черненко, Константин Устинович",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Konstantin_Chernenko_1984.jpg/1024px-Konstantin_Chernenko_1984.jpg",
  start: {
    date: new Date("1911-09-24"),
    location: {
      name: "Bolshaya Tes",
      latitude: 53.7167,
      longitude: 92.4333,
    },
  },
  end: {
    date: new Date("1985-03-10"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  events: [
    {
      name: "Birth and early life",
      info: {
        date: new Date("1911-09-24"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Konstantin_Chernenko_young.jpg/1024px-Konstantin_Chernenko_young.jpg",
        location: {
          name: "Bolshaya Tes",
          latitude: 53.7167,
          longitude: 92.4333,
        },
      },
    },
    {
      name: "Komsomol work",
      info: {
        date: new Date("1930-01-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Komsomol_badge.jpg/1024px-Komsomol_badge.jpg",
        location: {
          name: "Krasnoyarsk",
          latitude: 56.0087,
          longitude: 92.8707,
        },
      },
    },
    {
      name: "Party work in Moldova",
      info: {
        date: new Date("1948-01-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Chisinau_1950s.jpg/1024px-Chisinau_1950s.jpg",
        location: {
          name: "Chisinau",
          latitude: 47.0105,
          longitude: 28.8638,
        },
      },
    },
    {
      name: "Central Committee Secretary",
      info: {
        date: new Date("1976-03-05"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Chernenko_1976.jpg/1024px-Chernenko_1976.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "General Secretary",
      info: {
        date: new Date("1984-02-13"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Konstantin_Chernenko_1984.jpg/1024px-Konstantin_Chernenko_1984.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Death",
      info: {
        date: new Date("1985-03-10"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Chernenko_funeral.jpg/1024px-Chernenko_funeral.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};

export const YELTSIN_LIFE_BAR: TimeSpanBarProps = {
  header: "Ельцин, Борис Николаевич",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Boris_Yeltsin_1997.jpg/1024px-Boris_Yeltsin_1997.jpg",
  start: {
    date: new Date("1931-02-01"),
    location: {
      name: "Butka",
      latitude: 56.7167,
      longitude: 63.7833,
    },
  },
  end: {
    date: new Date("2007-04-23"),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  events: [
    {
      name: "Birth",
      info: {
        date: new Date("1931-02-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yeltsin_birthplace.jpg/1024px-Yeltsin_birthplace.jpg",
        location: {
          name: "Butka",
          latitude: 56.7167,
          longitude: 63.7833,
        },
      },
    },
    {
      name: "Moscow State University",
      info: {
        date: new Date("1955-01-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Moscow_State_University_main_building.jpg/1024px-Moscow_State_University_main_building.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "First Secretary of Moscow",
      info: {
        date: new Date("1985-12-24"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yeltsin_1985.jpg/1024px-Yeltsin_1985.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "President of Russia",
      info: {
        date: new Date("1991-07-10"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yeltsin_1991.jpg/1024px-Yeltsin_1991.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Constitutional Crisis",
      info: {
        date: new Date("1993-10-04"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/White_House_Moscow_1993.jpg/1024px-White_House_Moscow_1993.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Resignation",
      info: {
        date: new Date("1999-12-31"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yeltsin_resignation.jpg/1024px-Yeltsin_resignation.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Death",
      info: {
        date: new Date("2007-04-23"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yeltsin_funeral.jpg/1024px-Yeltsin_funeral.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};

export const PUTIN_LIFE_BAR: TimeSpanBarProps = {
  header: "Путин, Владимир Владимирович",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Vladimir_Putin_%282020-02-20%29.jpg/1024px-Vladimir_Putin_%282020-02-20%29.jpg",
  start: {
    date: new Date("1952-10-07"),
    location: {
      name: "Leningrad",
      latitude: 59.9343,
      longitude: 30.3351,
    },
  },
  end: {
    date: new Date(),
    location: {
      name: "Moscow",
      latitude: 55.7558,
      longitude: 37.6173,
    },
  },
  events: [
    {
      name: "Birth and early life",
      info: {
        date: new Date("1952-10-07"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Vladimir_Putin_young.jpg/1024px-Vladimir_Putin_young.jpg",
        location: {
          name: "Leningrad",
          latitude: 59.9343,
          longitude: 30.3351,
        },
      },
    },
    {
      name: "KGB service",
      info: {
        date: new Date("1975-08-01"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/KGB_badge.jpg/1024px-KGB_badge.jpg",
        location: {
          name: "Leningrad",
          latitude: 59.9343,
          longitude: 30.3351,
        },
      },
    },
    {
      name: "First term as President",
      info: {
        date: new Date("2000-05-07"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Vladimir_Putin_2000.jpg/1024px-Vladimir_Putin_2000.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
    {
      name: "Sochi Olympics",
      info: {
        date: new Date("2014-02-07"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sochi_Olympics_2014.jpg/1024px-Sochi_Olympics_2014.jpg",
        location: {
          name: "Sochi",
          latitude: 43.6028,
          longitude: 39.7342,
        },
      },
    },
    {
      name: "Special Military Operation",
      info: {
        date: new Date("2022-02-24"),
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Vladimir_Putin_2022.jpg/1024px-Vladimir_Putin_2022.jpg",
        location: {
          name: "Moscow",
          latitude: 55.7558,
          longitude: 37.6173,
        },
      },
    },
  ],
};
