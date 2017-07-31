var adAPI = {
    getAds: function () {
        var stringAds = localStorage.getItem('ads'),
            ads = [];

        try {
            ads = JSON.parse(stringAds);
        } catch (err) {

        }

        return Array.isArray(ads) ? ads : [];
    },
    setAds: function (ads) {
        if (!Array.isArray(ads)) {
            return;
        }

        localStorage.setItem('ads', JSON.stringify(ads));

        return ads;
    },
    addAd: function (ad) {
        
    }
};

export default adAPI;
