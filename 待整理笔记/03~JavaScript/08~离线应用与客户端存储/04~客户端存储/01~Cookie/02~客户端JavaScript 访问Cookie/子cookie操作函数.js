let SubCookieUtil = {
  get: function(name, subname) {
    let subCookies = this.getSubCookies(name);
    if (subCookies) {
      return subCookies[subname];
    } else {
      return null;
    }
  },

  getSubCookies: function(name) {
    let cookieName = encodeURIComponent(name) + '=';
    let cookieStart = document.cookie.indexOf(cookieName);
    let cookieValue = null;
    let ret = {};
    if (cookieStart != -1) {
      let cookieEnd = document.cookie.indexOf(';', cookieStart);
      if (cookieEnd == -1) cookieEnd = document.cookie.length;
      cookieValue = document.cookie.substring(
        cookieStart + cookieName.length,
        cookieEnd
      );

      // 分解cookieValue
      if (cookieValue) {
        subCookieArr = cookieValue.split('&');
        subCookieArr.forEach(subcookie => {
          let attr = subcookie.split('=')[0];
          let value = subcookie.split('=')[1];
          ret[decodeURIComponent(attr)] = decodeURIComponent(value);
        });
      }
    }
    return ret;
  },

  set: function(name, subName, value, expires, path, domain, secure) {
    let subcookies = this.getSubCookies(name) || {};
    subcookies[subName] = value; // 更新对象
    this.setSubcookies(name, subcookies, expires, path, domain, secure);
  },

  setSubcookies: function(name, subCookies, expires, path, domain, secure) {
    let cookieText = encodeURIComponent(name) + '=';
    let subCookieArr = [];

    for (let subName in subCookies) {
      if (subName.length > 0 && subCookies.hasOwnProperty(subName)) {
        subCookieArr.push(
          encodeURIComponent(subName) +
            '=' +
            encodeURIComponent(subCookies[subName])
        );
      }
    }

    if (subCookieArr.length > 0) {
      cookieText += subCookieArr.join('&');

      if (expires instanceof Date) {
        cookieText += ';expires=' + expires.toUTCString();
      }
      if (path) {
        cookieText += ';path=' + path;
      }
      if (domain) {
        cookieText += ';domain=' + domain;
      }
      if (secure) {
        cookieText += ';secure';
      }
    }
    document.cookie = cookieText + ';';
  },

  remove: function(name, subName, path, domain, secure) {
    let subCookies = this.getSubCookies(name);
    if (subCookies) {
      delete subCookies[subName];
      this.setSubcookies(name, subCookies, null, path, domain, secure);
    }
  },
  removeAll: function() {
    this.setSubcookies(name, null, new Date(0), path, domain, secure);
  }
};
