// gatsby-browser.js
const appId = process.env.FB_APP_ID;


export const onClientEntry = () => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : { appId },
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v19.0'
      });
    };
  
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/fr_FR/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  };
  