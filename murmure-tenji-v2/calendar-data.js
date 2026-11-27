const SEASON_META = {
      spring: { name: "春", months: "3〜5月" },
      rain: { name: "梅雨", months: "6〜7月半ば" },
      summer: { name: "夏", months: "7月半ば〜9月半ば" },
      autumn: { name: "秋", months: "9月半ば〜11月" },
      winter: { name: "冬", months: "12〜2月" }
    };

const TYPE_CONFIGS = {
      "sun-main": {
        theme: "sun",
        oneLine: "日向が基本。春秋はたっぷり水やり、夏と冬は控えめに",
        summary: {
          place: "日当たりのよい屋外・南の窓辺",
          water: "春秋は乾いたらたっぷり",
          care: "梅雨〜夏の蒸れ・西日／冬の霜"
        },
        seasonMonths: { autumn: "9月半ば〜11月", winter: "12〜2月" },
        images: {
          spring: "images/cal2_spring_happy.jpg",
          rain: "images/cal2_rain_humid.jpg",
          summer: "images/cal2_summer_hot.webp",
          autumn: "images/cal2_autumn_happy.jpg",
          winter: "images/cal2_winter_cold.jpg"
        },
        komorebi: {
          summer: "images/komorebi_summer.png"
        },
        bubbles: {
          spring: { phase: "成長期", tone: "tone-grow", note: "ぐんぐん育つよ！" },
          rain: { phase: "蒸れ注意", tone: "tone-rain", note: "ジメジメ苦手だな…" },
          summer: { phase: "ひと休み", tone: "tone-summer", note: "暑くてぐったり…" },
          autumn: { phase: "成長期", tone: "tone-grow", note: "涼しくなって元気！" },
          winter: { phase: "ゆっくり", tone: "tone-winter", note: "寒くてじっとしてるよ" }
        },
        waterBar: [
          { span: 6, level: 3, label: "乾いたらたっぷり" },
          { span: 3, level: 2, label: "控えめ" },
          { span: 4, level: 1, label: "ごく控えめ" },
          { span: 5, level: 3, label: "乾いたらたっぷり" },
          { span: 6, level: 1, label: "ごく控えめ" }
        ],
        ideals: { spring: [3, 2, 3], rain: [2, 2, 2], summer: [2, 2, 1], autumn: [3, 2, 3], winter: [3, 2, 1] }
      },

      "sun-cool": {
        theme: "sun",
        oneLine: "秋〜春は日向で元気に。夏は日陰でほぼ断水して休ませる",
        summary: {
          place: "秋〜春は日向／夏は明るい日陰",
          water: "秋〜春は乾いたら／夏は断水気味",
          care: "夏の落葉は休眠中で正常です"
        },
        seasonMonths: { autumn: "9月半ば〜11月", winter: "12〜2月" },
        images: {
          spring: "images/cal2_spring_happy.jpg",
          rain: "images/cal2_rain_rest.jpg",
          summer: "images/cal2_summer_rest.jpg",
          autumn: "images/cal2_autumn_happy.jpg",
          winter: "images/cal2_winter_happy.jpg"
        },
        komorebi: {
          summer: "images/komorebi_summer.png"
        },
        bubbles: {
          spring: { phase: "成長期", tone: "tone-grow", note: "お日さま大好き！" },
          rain: { phase: "休眠準備", tone: "tone-rain", note: "ふぁ…雨よけしてね" },
          summer: { phase: "完全休眠", tone: "tone-sleep", note: "涼しい日陰でぐっすり" },
          autumn: { phase: "成長期", tone: "tone-grow", note: "目が覚めてきたよ！" },
          winter: { phase: "成長期", tone: "tone-grow", note: "涼しいの好き。霜は苦手！" }
        },
        waterBar: [
          { span: 6, level: 3, label: "乾いたらたっぷり" },
          { span: 3, level: 2, label: "減らしていく" },
          { span: 4, level: 1, label: "ほぼ断水" },
          { span: 5, level: 3, label: "少しずつ再開" },
          { span: 6, level: 2, label: "乾いて少量" }
        ],
        ideals: { spring: [3, 2, 3], rain: [2, 2, 2], summer: [2, 2, 1], autumn: [3, 2, 3], winter: [3, 2, 2] }
      },

      "sun-warm": {
        theme: "sun",
        oneLine: "春〜秋は日向で元気に。11月からは暖かい室内へ",
        summary: {
          place: "春〜秋は日向／冬は暖かい窓辺",
          water: "春〜秋は乾いたら／冬は少し",
          care: "寒さに弱い・11月から室内へ"
        },
        seasonMonths: { autumn: "9月半ば〜10月", winter: "11〜2月" },
        images: {
          spring: "images/cal2_spring_happy.jpg",
          rain: "images/cal2_rain_humid.jpg",
          summer: "images/cal2_summer_happy.jpg",
          autumn: "images/cal2_autumn_happy.jpg",
          winter: "images/cal2_winter_indoor.jpg"
        },
        bubbles: {
          spring: { phase: "成長期", tone: "tone-grow", note: "ぽかぽか元気だよ！" },
          rain: { phase: "蒸れ注意", tone: "tone-rain", note: "ジメジメ苦手だな…" },
          summer: { phase: "成長期", tone: "tone-summer", note: "暑さには強いよ！" },
          autumn: { phase: "成長期", tone: "tone-grow", note: "寒くなる前にぐんぐん" },
          winter: { phase: "暖かい室内へ", tone: "tone-indoor", note: "寒いのは苦手なんだ〜" }
        },
        waterBar: [
          { span: 6, level: 3, label: "乾いたらたっぷり" },
          { span: 3, level: 2, label: "控えめ" },
          { span: 4, level: 2, label: "乾いて少量" },
          { span: 3, level: 3, label: "たっぷり" },
          { span: 8, level: 1, label: "ごく控えめ" }
        ],
        ideals: { spring: [3, 2, 3], rain: [2, 2, 2], summer: [2, 2, 2], autumn: [3, 2, 3], winter: [2, 2, 1] }
      },

      "shade-main": {
        theme: "shade",
        oneLine: "直射は避けて明るい日陰へ。春秋はたっぷり、夏と冬は控えめに",
        summary: {
          place: "レース越しの窓辺・明るい日陰",
          water: "春秋は乾いたらたっぷり",
          care: "直射の葉焼け・無風の蒸れ"
        },
        seasonMonths: { autumn: "9月半ば〜11月", winter: "12〜2月" },
        images: {
          spring: "images/cal2_spring_happy.jpg",
          rain: "images/cal2_rain_humid.jpg",
          summer: "images/cal2_summer_sleep.jpg",
          autumn: "images/cal2_autumn_happy.jpg",
          winter: "images/cal2_winter_indoor.jpg"
        },
        komorebi: {
          spring: "images/komorebi_spring.png",
          summer: "images/komorebi_summer.png",
          autumn: "images/komorebi_autumn.png"
        },
        bubbles: {
          spring: { phase: "成長期", tone: "tone-grow", note: "やさしい光が心地いい" },
          rain: { phase: "蒸れ注意", tone: "tone-rain", note: "風を通してあげてね" },
          summer: { phase: "ひと休み", tone: "tone-summer", note: "涼しい木陰でのんびり" },
          autumn: { phase: "成長期", tone: "tone-grow", note: "やさしい光でまた元気" },
          winter: { phase: "ゆっくり", tone: "tone-winter", note: "明るい窓辺でしずかに" }
        },
        waterBar: [
          { span: 6, level: 3, label: "乾いたらたっぷり" },
          { span: 3, level: 2, label: "控えめ" },
          { span: 4, level: 1, label: "ごく控えめ" },
          { span: 5, level: 3, label: "乾いたらたっぷり" },
          { span: 6, level: 1, label: "ごく控えめ" }
        ],
        ideals: { spring: [2, 2, 3], rain: [2, 2, 2], summer: [2, 2, 1], autumn: [2, 2, 3], winter: [2, 2, 1] }
      }
    };

function detectCurrentSeason(type) {
      const params = new URLSearchParams(window.location.search);
      const qMonth = parseInt(params.get("month"), 10);
      const now = new Date();
      const month = (qMonth >= 1 && qMonth <= 12) ? qMonth : (now.getMonth() + 1);
      const day = (qMonth >= 1 && qMonth <= 12) ? 15 : now.getDate();

      if (month >= 3 && month <= 5) return "spring";
      if (month === 6 || (month === 7 && day <= 15)) return "rain";
      if ((month === 7 && day > 15) || month === 8 || (month === 9 && day <= 15)) return "summer";
      if (type === "sun-warm") {
        if ((month === 9 && day > 15) || month === 10) return "autumn";
        return "winter";
      }
      if ((month === 9 && day > 15) || month === 10 || month === 11) return "autumn";
      return "winter";
    }
