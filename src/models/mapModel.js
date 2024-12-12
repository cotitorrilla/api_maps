import { Schema, model } from "mongoose";

const mapSchema = new Schema(
  {
    country: { type: String, required: true, unique: true },
    province: { type: [String], required: true },
    autor: { type: String, required: true },
    scale: { type: Number, required: true },
    format: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Map = model("Map", mapSchema);

const getAllMaps = async () => {
  try {
    const maps = await Map.find();
    return maps;
  } catch (error) {
    throw {
      status: 500,
      message: "Error retrieving maps from the database.",
    };
  }
};

const getMapById = async (id) => {
  try {
    const map = await Map.findById(id);
    if (!map) {
      throw {
        status: 404,
        message: "Map not found.",
      };
    }
    return map;
  } catch (error) {
    throw {
      status: 500,
      message: "Error retrieving map from the database.",
    };
  }
};

const addMap = async (dataMap) => {
  try {
    const newMap = new Map(dataMap);
    await newMap.save();
    return newMap;
  } catch (error) {
    if (error.code === 11000) {
      throw {
        status: 409,
        message: "Duplicate country: A map with this country already exists.",
      };
    }
    throw {
      status: 500,
      message: "Error creating the map",
    };
  }
};

const updateMap = async (id, updateData) => {
  try {
    const map = await Map.findById(id);
    if (!map) {
      throw {
        status: 404,
        message: "Map not found.",
      };
    }
    Object.assign(map, updateData);
    await map.save();
    return map;
  } catch (error) {
    throw {
      status: 500,
      message: "Error updating the map",
    };
  }
};

const deleteMap = async (id) => {
  try {
    const deletedMap = await Map.findByIdAndDelete(id);

    if (!deletedMap) {
      throw {
        status: 404,
        message: "Map not found.",
      };
    }

    return deletedMap;
  } catch (error) {
    throw {
      status: 500,
      message: "Error deleting the map",
    };
  }
};

export default {
  getAllMaps,
  getMapById,
  addMap,
  updateMap,
  deleteMap,
};
