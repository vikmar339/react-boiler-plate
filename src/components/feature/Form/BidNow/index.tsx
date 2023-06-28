import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import Button from "src/components/common/Button";
import ProgressBar from "src/components/common/ProgressBar";
import styles from "./styles";
import { useAppSelector } from "src/redux/store";

type iconsListType = {
  formDetails: boolean;
  label: string;
  icon: any;
  iconLabel: string;
  value: string;
  id: number;
};

type bidNow = {
  toggleBuy: Function;
  iconList: any;
  handleFormAction: Function;
};

const BidNow = ({ toggleBuy, iconList = [], handleFormAction }: bidNow) => {
  const [biddingAmount, setBiddingAmount] = useState<number>(5000);
  const [biddingPopup, setBiddingPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = Number(e.target.value);
    if (value >= 0) {
      setBiddingAmount(value);
    }
  };

  const theme = useAppSelector((state: any) => state.site.theme);
  return (
    <>
      <Box sx={styles.wrapper} className={biddingPopup ? "make_blur" : ""}>
        <Box sx={styles.roomImage}>
          <img
            src="https://d1kjz001kvkiw8.cloudfront.net/assets/room-1.webp"
            alt="room"
          />
          <Box sx={styles.iconList}>
            {iconList.map((item: iconsListType) => (
              <Button
                key={item.id}
                as={"IconButton"}
                label={item.iconLabel}
                onClick={() => handleFormAction(item)}
              >
                {item.icon}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={styles.recommendedBox}>Recommended Price @5000</Box>
        <Box sx={styles.contentBox}>
          <Box className="upper">
            <Box className="image">
              <img
                src="https://d1kjz001kvkiw8.cloudfront.net/assets/stock.webp"
                alt="stock"
              />
            </Box>
            <Box className="textWrapper">
              <Box className="upperText">Our Advice</Box>
              <Box className="lowerText">
                Prices are unlikely to decrease{" "}
                <Tooltip title="Dummy Text">
                  <Box className="info">
                    <img
                      src="https://d1kjz001kvkiw8.cloudfront.net/assets/info_icon.svg"
                      alt="i"
                    />
                  </Box>
                </Tooltip>
              </Box>
            </Box>
            <Box
              sx={{
                color:
                  theme?.primary,
              }}
              className="buyNow"
              onClick={() => toggleBuy()}
            >
              Buy Now
            </Box>
          </Box>
          <Box className="lower">
            <Box sx={styles.bidder}>
              <Box className="currency">Rs</Box>
              <Box className="input_field">
                <input
                  value={biddingAmount}
                  type="text"
                  onChange={(e: any) => handleChange(e)}
                />
              </Box>
              <Box className="bidding_box">
                <Box
                  className="decrease"
                  onClick={() => {
                    if (biddingAmount - 100 >= 0) {
                      setBiddingAmount(biddingAmount - 100);
                    }
                  }}
                >
                  -100
                </Box>
                <Box className="divider"></Box>
                <Box
                  className="increase"
                  onClick={() => {
                    setBiddingAmount(biddingAmount + 100);
                  }}
                >
                  +100
                </Box>
              </Box>
            </Box>
            <Button
              as={"SimpleButton"}
              label="Place Bid"
              onClick={() => setBiddingPopup(true)}
              customStyles={{ borderRadius: "4px" }}
            />
          </Box>
        </Box>
      </Box>
      {biddingPopup && (
        <Box sx={styles.biddingTooltip}>
          <Box className="container">
            <Box className="text">Our agent has offered a price of </Box>
            <Box className="price">
              {"Rs."} {biddingAmount}
            </Box>
            <Box className="buttonWrapper">
              <Button
                as={"SimpleButton"}
                secondary={true}
                label="Reject"
                customStyles={styles.button}
                onClick={() => {
                  setBiddingPopup(false);
                }}
              />
              <Button
                as={"SimpleButton"}
                label="Accept"
                customStyles={styles.button}
                onClick={() => setBiddingPopup(false)}
              />
            </Box>
            <ProgressBar setBiddingPopup={setBiddingPopup} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default BidNow;
