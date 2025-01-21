import { useState } from "react";
import { Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ApartmentIcon from "@mui/icons-material/Apartment";

const types = ["buy", "rent"];

function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    });

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 p-4 border border-gray-400 rounded-lg">
            <div className="flex gap-2 flex-wrap justify-center sm:justify-start w-full">
                {types.map((type) => (
                    <Button
                        key={type}
                        variant="contained"
                        color={query.type === type ? (type === "buy" ? "success" : "info") : "default"}
                        onClick={() => switchType(type)}
                        className="capitalize w-12 sm:w-24 md:w-32"
                    >
                        {type === "buy" ? (
                            <>
                                <ShoppingCartIcon className="sm:hidden" />
                                <span className="hidden sm:inline">{type}</span>
                            </>
                        ) : (
                            <>
                                <ApartmentIcon className="sm:hidden" />
                                <span className="hidden sm:inline">{type}</span>
                            </>
                        )}
                    </Button>
                ))}
            </div>

            <form className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between w-full">
                <TextField
                    label="City Location"
                    variant="outlined"
                    name="location"
                    fullWidth
                    value={query.location}
                    onChange={(e) => setQuery({ ...query, location: e.target.value })}
                    className="sm:w-80 md:w-96"
                />
                <div className="flex gap-2 sm:w-full m-2">
                    <TextField
                        label="Min Price"
                        type="number"
                        variant="outlined"
                        min={0}
                        name="minPrice"
                        value={query.minPrice}
                        onChange={(e) => setQuery({ ...query, minPrice: e.target.value })}
                        className="sm:w-40 md:w-48"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Max Price"
                        min={0}
                        type="number"
                        variant="outlined"
                        name="maxPrice"
                        value={query.maxPrice}
                        onChange={(e) => setQuery({ ...query, maxPrice: e.target.value })}
                        className="sm:w-40 md:w-48"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    className="sm:w-full md:w-44 lg:w-52 mt-2 sm:mt-0"
                >
                    <span className="sm:inline hidden">Search</span>
                    <SearchIcon className="sm:hidden" />
                </Button>
            </form>
        </div>
    );
}

export default SearchBar;
