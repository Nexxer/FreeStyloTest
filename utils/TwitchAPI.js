const clientId = "k5kbhnwh2dd229ti2858yt0ftwaj7s";
const bear = "ch056mamhziumb9vdt3x3ipw3uiilp";

export const getChanelVideos = async (valueToSearch) => {
  return await fetch(
    `https://api.twitch.tv/helix/users?login=${valueToSearch}`,
    {
      headers: {
        Authorization: `Bearer ${bear}`,
        "Client-Id": clientId,
      },
    }
  )
    .then((res) => {
      if (res.status) {
        return res.json();
      }
      return Promise.reject(`Статус ответа: ${res.status}`);
    })
    .then((res) => {
      return fetch(
        `https://api.twitch.tv/kraken/channels/${res.data[0].id}/videos`,
        {
          headers: {
            Accept: "application/vnd.twitchtv.v5+json",
            "Client-Id": clientId,
          },
        }
      );
    })
    .then((res) => {
      if (res.status) {
        return res.json();
      }
      return Promise.reject(`Статус ответа: ${res.status}`);
    })
    .catch((err) => {
      console.log("Ошибка. Запрос не выполнен: " + err);
    });
};
