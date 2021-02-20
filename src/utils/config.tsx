import {
  Star,
  DirectMessage,
  Channel,
  RightArrow,
  DownArrow,
} from "../components/icons";

export function LeftMenu(config: any) {
  const { channelDetails, topPoster, createdBy } = config;
  return [
    {
      title: "Channel Details",
      arrow: channelDetails ? <DownArrow /> : <RightArrow />,
      status: channelDetails,
    },
    {
      title: "Top poster",
      arrow: topPoster ? <DownArrow /> : <RightArrow />,
      status: topPoster,
    },
    {
      title: "Created By",
      arrow: createdBy ? <DownArrow /> : <RightArrow />,
      status: createdBy,
    },
  ];
}

export function RightMenu(config: any) {
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
