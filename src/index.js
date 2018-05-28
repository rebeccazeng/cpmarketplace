class DashboardOption extends React.Component {
  render() {
    return (
      <a>
        {this.props.value}
        </a>
    );
  }
}

class Dashboard extends React.Component {
  renderDashboardOption(option) {
    return <DashboardOption value={option} />;
  }
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-option" id="bold-menu-item">{this.renderDashboardOption("CollegePrep.org")}</div>
        <div className="dashboard-option">{this.renderDashboardOption("Find a Tutor")}</div>
        <div className="dashboard-option">{this.renderDashboardOption("Become a Tutor")}</div>
        <div className="dashboard-option">{this.renderDashboardOption("Pricing")}</div>
        <div className="dashboard-option">{this.renderDashboardOption("About")}</div>
        
        <div className="dashboard-option" id="navbar-right">{this.renderDashboardOption("Sign Up")}</div>
        <div className="dashboard-option" id="navbar-right">{this.renderDashboardOption("Log In")}</div>

         

       
      </div>
    );
  }
}
//========================================

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);
