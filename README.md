# FactWise Employee Dashboard

A professional React dashboard built with AG Grid for displaying employee data with advanced filtering, sorting, and pagination capabilities.

## Features

- **AG Grid Integration**: Professional data grid with client-side rendering
- **Interactive Dashboard**: Clean and modern UI with employee statistics
- **Advanced Filtering**: Column-based filtering with floating filters
- **Sorting & Pagination**: Multi-column sorting with pagination support
- **Responsive Design**: Mobile-friendly layout
- **Performance Optimized**: Efficient handling of large datasets
- **Custom Cell Renderers**: Color-coded performance ratings and status indicators

## Technologies Used

- React 18
- AG Grid Community
- CSS3 with modern styling
- JavaScript ES6+

## Installation & Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd factwise-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the dashboard

## Project Structure

```
src/
├── components/
│   ├── Dashboard.js      # Main dashboard component
│   └── Dashboard.css     # Dashboard styling
├── data/
│   └── employeeData.js   # Employee dataset
├── App.js               # Root component
├── App.css              # App styling
└── index.js             # Entry point
```

## Dashboard Features

### Statistics Cards
- Total Employees count
- Active Employees count
- Number of Departments
- Average Performance Rating

### Data Grid Features
- **Sorting**: Click column headers to sort
- **Filtering**: Use column filters and floating filters
- **Pagination**: Navigate through data pages
- **Row Selection**: Multi-row selection support
- **Resizable Columns**: Drag column borders to resize
- **Pinned Columns**: ID column pinned to left
- **Custom Renderers**: 
  - Performance ratings with color coding
  - Employee status with visual indicators
  - Formatted salary display
  - Skills displayed as comma-separated list

### Data Fields Displayed
- Employee ID, Name, Email
- Department and Position
- Salary (formatted with currency)
- Hire Date, Age, Location
- Performance Rating (color-coded)
- Projects Completed
- Active Status
- Skills and Manager

## Customization

The dashboard can be easily customized by:
- Modifying column definitions in `Dashboard.js`
- Updating styling in `Dashboard.css`
- Adding new data fields to `employeeData.js`
- Implementing additional AG Grid features

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Assignment Requirements Met

✅ Frontend Dashboard with AG Grid  
✅ React with client-side rendering  
✅ Sample dataset integration (20 rows)  
✅ Clean and professional layout  
✅ Scalable and robust implementation  
✅ Efficient large dataset handling  

## Author

Created for FactWise Frontend Developer Assessment

## License

This project is created for educational purposes as part of a college assignment.