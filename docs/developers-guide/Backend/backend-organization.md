---
sidebar_position: 1
---
# Backend Organization
DAIKON is a modular system that comprises five core elements, each with its separate project connected using the CQRS Mediator pattern.

- The first core element is the **API interface**, which provides users with access to the system's data and features. The API interface allows users to interact with the system and request specific data or operations.

- The second element is an **application layer** responsible for executing the system's business logic. This layer is designed to be a robust and efficient backend that can handle large volumes of data and complex computations.

- The **Domain Layer** that defines the fundamental entities of the project.
  
- The third element is a **SQL-compatible Persistance Layer** that serves as the data store for the system. The layer is optimized for performance and is capable of handling large amounts of data and concurrent users.

- Finally, the fourth element is a **user authentication bridge** that links the system with an organization's existing Active Directories or SSOs. The authentication bridge ensures that users can access the system using their existing credentials, simplifying the login process and improving the overall user experience.

All these core elements are interconnected using the CQRS Mediator pattern, which helps to simplify the architecture of the system and improve its performance and scalability. By breaking down the system into separate modules, DAIKON can provide users with a flexible and robust solution for data management and analysis.

## Understanding CQRS

The CQRS Mediator pattern is a software design pattern used in complex systems to separate the concerns of reading and writing data. CQRS stands for "Command Query Responsibility Segregation," and it separates the commands (write operations) and queries (read operations) into separate objects. Mediator is a behavioral pattern that allows communication between objects without them needing to know each other's details.

In a system that uses the CQRS Mediator pattern, a mediator object sits between the commands and queries and forwards requests from one to the other. This separation of concerns makes it easier to design, develop, and maintain complex systems by minimizing dependencies between different parts of the system.

For example, in the DAIKON system, the CQRS Mediator pattern is used to separate the API interface (which handles queries) and the application layer (which handles commands). The mediator object sits between the two and forwards requests between them, ensuring that each object is responsible for its specific task.