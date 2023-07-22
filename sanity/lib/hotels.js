const CustomDateInput = ({ type, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

const Hotels = {
  name: 'hotels',
  title: 'Hotels',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Hotel Name',
      type: 'string',
    },
    {
      name: 'stars',
      title: 'Stars',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string', // Using a string type for date input
      inputComponent: CustomDateInput, // Custom input component for date
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  // Add access control rules (unchanged from your previous schema)
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
  },
  // Define custom access control rules (unchanged from your previous schema)
  __experimental_access: [
    {
      role: 'admin',
      permission: 'manage',
    },
    {
      role: 'editor',
      permission: 'create',
    },
    {
      role: 'viewer',
      permission: 'read',
    },
    {
      role: 'editor',
      permission: 'update',
    },
    {
      role: 'viewer',
      permission: 'history',
    },
    {
      role: 'admin',
      permission: 'delete',
    },
  ],
};

// Custom input component to allow "7-12 Aug" format for date

export default Hotels;
