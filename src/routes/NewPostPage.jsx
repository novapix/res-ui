import { TextField, MenuItem, Select, FormControl, InputLabel, Button } from "@mui/material";

function NewPostPage() {
    return (
        <div className="flex min-h-screen">
            <div className="flex-3 overflow-scroll">
                <div className="mx-12 my-8">
                    <h1 className="text-2xl font-bold mb-8">Add New Post</h1>
                    <form className="flex flex-wrap gap-5">
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Title" id="title" name="title" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Price" id="price" name="price" type="number" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Address" id="address" name="address" variant="outlined" fullWidth />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <TextField label="Description" id="desc" name="desc" variant="outlined" fullWidth multiline rows={4} />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="City" id="city" name="city" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Bedroom Number" id="bedroom" name="bedroom" type="number" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Bathroom Number" id="bathroom" name="bathroom" type="number" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Latitude" id="latitude" name="latitude" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Longitude" id="longitude" name="longitude" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <FormControl fullWidth>
                                <InputLabel>Type</InputLabel>
                                <Select name="type" defaultValue="rent">
                                    <MenuItem value="rent">Rent</MenuItem>
                                    <MenuItem value="buy">Buy</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <FormControl fullWidth>
                                <InputLabel>Property</InputLabel>
                                <Select name="property" defaultValue="apartment">
                                    <MenuItem value="apartment">Apartment</MenuItem>
                                    <MenuItem value="house">House</MenuItem>
                                    <MenuItem value="condo">Condo</MenuItem>
                                    <MenuItem value="land">Land</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <FormControl fullWidth>
                                <InputLabel>Utilities Policy</InputLabel>
                                <Select name="utilities" defaultValue="owner">
                                    <MenuItem value="owner">Owner is responsible</MenuItem>
                                    <MenuItem value="tenant">Tenant is responsible</MenuItem>
                                    <MenuItem value="shared">Shared</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <FormControl fullWidth>
                                <InputLabel>Pet Policy</InputLabel>
                                <Select name="pet" defaultValue="allowed">
                                    <MenuItem value="allowed">Allowed</MenuItem>
                                    <MenuItem value="not-allowed">Not Allowed</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField id="income" name="income" type="text" placeholder="Income Policy" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Total Size (sqft)" id="size" name="size" type="number" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="School" id="school" name="school" type="number" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Bus" id="bus" name="bus" type="number" variant="outlined" fullWidth />
                        </div>
                        <div className="w-1/3 flex flex-col gap-1">
                            <TextField label="Restaurant" id="restaurant" name="restaurant" type="number" variant="outlined" fullWidth />
                        </div>
                        <Button variant="contained" color="primary" className="w-1/3 mt-5">
                            Add
                        </Button>
                    </form>
                </div>
            </div>
            {/*<div className="flex-2 bg-[#fcf5f3] flex flex-col items-center justify-center gap-5">*/}
            {/*    <img src="/image.jpg" className="w-1/2 h-[180px] object-cover rounded-lg" alt="Image" />*/}
            {/*</div>*/}
        </div>
    );
}

export default NewPostPage;
