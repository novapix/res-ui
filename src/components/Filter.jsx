import React from "react";
import { TextField, MenuItem, Select, InputLabel, FormControl, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Filter() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-light text-2xl">
                Search results for <b>London</b>
            </h1>

            <div className="top">
                <div className="item flex flex-col gap-1">
                    <label className="text-xs" htmlFor="city">Location</label>
                    <TextField
                        id="city"
                        name="city"
                        placeholder="City Location"
                        variant="outlined"
                        fullWidth
                    />
                </div>
            </div>

            <div className="bottom flex flex-wrap gap-5">
                <div className="item flex flex-col gap-1 w-1/3">
                    <label className="text-xs" htmlFor="type">Type</label>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="type-label">Type</InputLabel>
                        <Select
                            labelId="type-label"
                            id="type"
                            name="type"
                            defaultValue=""
                            label="Type"
                        >
                            <MenuItem value="">any</MenuItem>
                            <MenuItem value="buy">Buy</MenuItem>
                            <MenuItem value="rent">Rent</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="item flex flex-col gap-1 w-1/3">
                    <label className="text-xs" htmlFor="property">Property</label>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="property-label">Property</InputLabel>
                        <Select
                            labelId="property-label"
                            id="property"
                            name="property"
                            defaultValue=""
                            label="Property"
                        >
                            <MenuItem value="">any</MenuItem>
                            <MenuItem value="apartment">Apartment</MenuItem>
                            <MenuItem value="house">House</MenuItem>
                            <MenuItem value="condo">Condo</MenuItem>
                            <MenuItem value="land">Land</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="item flex flex-col gap-1 w-1/3">
                    <label className="text-xs" htmlFor="minPrice">Min Price</label>
                    <TextField
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        placeholder="any"
                        variant="outlined"
                        fullWidth
                    />
                </div>

                <div className="item flex flex-col gap-1 w-1/3">
                    <label className="text-xs" htmlFor="maxPrice">Max Price</label>
                    <TextField
                        type="text"
                        id="maxPrice"
                        name="maxPrice"
                        placeholder="any"
                        variant="outlined"
                        fullWidth
                    />
                </div>

                <div className="item flex flex-col gap-1 w-1/3">
                    <label className="text-xs" htmlFor="bedroom">Bedroom</label>
                    <TextField
                        type="text"
                        id="bedroom"
                        name="bedroom"
                        placeholder="any"
                        variant="outlined"
                        fullWidth
                    />
                </div>

                <div className="w-full flex justify-end">
                    <Button
                        variant="contained"
                        color="warning"
                        className="flex items-center px-4 py-2"
                    >
                        <SearchIcon className="w-6 h-6 mr-2" />
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
