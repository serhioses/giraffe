var adAPI = {
    getAds: function () {
        var stringAds = localStorage.getItem('ads'),
            ads = [];

        try {
            ads = JSON.parse(stringAds);
        } catch (err) {

        }

        return $.isArray(ads) ? ads : [];
    },
    setAds: function (ads) {
        if (!$.isArray(ads)) {
            return;
        }

        localStorage.setItem('ads', JSON.stringify(ads));

        return ads;
    },
    addAd: function (ad) {
        
    }
};

export default adAPI;
