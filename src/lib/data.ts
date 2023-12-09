import { ContentItemType } from "@/types";

export const blogs: ContentItemType[] = [
  {
    id: new Date().valueOf(),
    title: "Rex, The Dog Who Never Stops Playing...Ever",
    imageUrl: "bark-play",
    text:
      "Sometimes it is difficult to get dogs interested in the toys you buy for them. .. " +
      "Luckily for Rex, everything he sees is a potential toy for him! Never let him around your " +
      "valuables or any socks. He will steal them and you will never see them again...",
  },
  {
    id: new Date().valueOf(),
    title: "",
    imageUrl: "bark-sleep",
    text:
      "One day, we started noticing Rex was ripping apart all of our sheets when he was bored except for this " +
      "blanket over here. Rex decided to spare this ugly white blanket that my grandmother gave me from her war days. " +
      "We never threw it away because we felt bad. Seeing Rex sleep on this blanket made us happy. " +
      "At least someone was using this blanket, even if we had to rebuy brand new sheets because we have such an " +
      "amazing dog. We love you Rex.",
  },
];

export const aboutUsContent: ContentItemType[] = [
  {
    id: new Date().valueOf(),
    imageUrl: "about-dog",
    text:
      "Here at Luxe Animal Spa we aim to provide you with the best service possible for both you and your pet! We pride ourselves in offering a true first-class experience." +
      "\n" +
      "Our grooming equipment is top quality.  We use only the most trusted brands in the industry which provides a beautiful, calming, and safe salon experience for your pets.",
  },
  {
    id: new Date().valueOf(),
    imageUrl: "about-cat",
    text:
      "All animals deserve a special spa pampering treatment, but mostly cats and dogs. Luxe Animal Spa offers the best spa treatments to leave your pets feeling amazing!\n" +
      "\n" +
      "We are the first in Canada to offer spa treatments for cats and dogs. This is unheard of in many places so come, bring your amazing cat or dog and let us make their spa experience something they will never forget!",
  },
];
