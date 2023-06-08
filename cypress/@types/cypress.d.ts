declare namespace Cypress {
  interface Chainable {
    /**
     * Creates a new project in the web application using the provided project details.
     *
     * @param {object} project - The project details.
     * @param {string} project.name - The name of the project.
     * @param {string} project.description - The description of the project.
     * @example
     * cy.gui_createProject({
     *   name: 'My Project',
     *   description: 'This is a sample project.'
     * });
     */
    gui_createProject(project: { name: string; description: string }): void;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Logs in to a web application using the provided credentials or the default values from environment variables.
     *
     * @param {string} [user] - The username for login. If not provided, the value from the 'user_name' environment variable will be used.
     * @param {string} [password] - The password for login. If not provided, the value from the 'user_password' environment variable will be used.
     * @example
     * cy.login('my-username', 'my-password');
     * cy.login(); // Uses default values from environment variables
     */
    login(user?: string, password?: string): void;
  }
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Logs out from the web application.
     *
     * This command triggers the logout process by clicking on the user avatar and selecting the "Sign out" option.
     *
     * @example
     * cy.logout();
     */
    logout(): void;
  }
}
