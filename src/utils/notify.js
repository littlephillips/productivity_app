export const notify = (title, options) => {
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") new Notification(title, options);
      });
    }
  }
};
