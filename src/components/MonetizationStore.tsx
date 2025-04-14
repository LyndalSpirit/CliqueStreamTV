import React, { useState } from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

// Interface for defining a purchasable item, including its name, icon, price, and gift value.
interface PurchasableItem {
  name: string;
  icon: React.ComponentType; // Icon from Material UI
  price: number; // Purchase price
  giftValue: number; // Value when gifted
}

// Array of available items for purchase. Each item includes a name, icon, price, and gift value.
const purchasableItems: PurchasableItem[] = [
  // Diamond: Represents a valuable virtual item with a moderate gift value.
  { name: "Diamond", icon: DiamondIcon, price: 0.99, giftValue: 100 },
  // Plane: A premium virtual item with a high gift value.
  { name: "Plane", icon: FlightIcon, price: 9.99, giftValue: 1000 },
  // Car: An exclusive virtual item with the highest gift value.
  { name: "Car", icon: DirectionsCarIcon, price: 24.99, giftValue: 2500 },
];

// MonetizationStore component: Allows users to purchase virtual items within the application.
const MonetizationStore: React.FC = () => {
  // State to keep track of the currently selected item.
  const [selectedItem, setSelectedItem] = useState<PurchasableItem | null>(null);
  // State to store the amount of bean.
  const [bean, setBean] = useState<number>(0);

  // CLIQUE's percentage per transaction (e.g., 10%).
  const cliquePercentage = 10;

  // Function to calculate CLIQUE's cut from a transaction.
  const calculateCliqueCut = (price: number): number => {
    return (price * cliquePercentage) / 100;
  };

  // Function to handle the purchase of an item.
  const handlePurchase = async () => {
    // Check if an item has been selected.
    if (!selectedItem) {
      alert("Please select an item to purchase.");
      return;
    }

    const cliqueCut = calculateCliqueCut(selectedItem.price);

    // Simulate a successful purchase with a mock API call.
    try {
      // Simulate API call delay (e.g., waiting for payment confirmation).
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Display a purchase confirmation alert.
      alert(
        `Successfully purchased ${selectedItem.name} for $${selectedItem.price}! You received ${selectedItem.giftValue} Beans! CLIQUE makes $${cliqueCut}`
      );

      // Update the user's bean balance based on the gift value of the purchased item.
      setBean((prev) => prev + selectedItem.giftValue);

      // Log the purchase details to the console.
      console.log(
        `Purchase: ${selectedItem.name} for $${selectedItem.price}, Gift Value: ${selectedItem.giftValue} Beans, CLIQUE Cut: $${cliqueCut}`
      );

      // Reset the selected item after purchase.
      setSelectedItem(null);
    } catch (error) {
      console.error("Purchase failed:", error);
      alert("Purchase failed. Please try again.");
    }
  };

  // Show the values of beans
  const ShowBeans = () => {
    return (
      <div>
        <Typography variant="h6">Your balance:</Typography>
        <Typography variant="h6">{bean}</Typography>
      </div>
    );
  };

  // Rendering the component's UI.
  return (
    <Box>
      {/* Display the user's current bean balance */}
      <ShowBeans />

      {/* Header for the store */}
      <Typography variant="h4" gutterBottom>
        Purchase Items
      </Typography>

      {/* List of items available for purchase */}
      <List>
        {purchasableItems.map((item) => (
          <ListItem key={item.name}>
            <ListItemIcon>
              <item.icon /> {/* Display the item's icon */}
            </ListItemIcon>
            <ListItemText primary={item.name} secondary={`$${item.price} - Gift Value: ${item.giftValue} Beans`} />
            <Button variant="outlined" onClick={() => setSelectedItem(item)} disabled={selectedItem?.name === item.name}>
              Select
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Button to initiate the purchase process */}
      <Button variant="contained" onClick={handlePurchase} disabled={!selectedItem}>
        Purchase
      </Button>
    </Box>
  );
};

export default MonetizationStore;