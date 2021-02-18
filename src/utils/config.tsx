import {
  Star,
  DirectMessage,
  Channel,
  RightArrow,
  DownArrow,
} from "../components/icons";

export function Menu(config: any) {
  const { starred, channel, directMessage } = config;
  return [
    {
      title: "Starred",
      icon: <Star />,
      arrow: starred ? <DownArrow /> : <RightArrow />,
      status: starred,
    },
    {
      title: "Channel",
      icon: <Channel />,
      arrow: channel ? <DownArrow /> : <RightArrow />,
      status: channel,
    },
    {
      title: "Direct Message",
      icon: <DirectMessage />,
      arrow: directMessage ? <DownArrow /> : <RightArrow />,
      status: directMessage,
    },
  ];
}
