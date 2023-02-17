---
sidebar_position: 2
---
# API Controller Base

```
{
  [ApiController]
  [Route("api/[controller]")]
  public class ApiControllerBase : ControllerBase
  {
    private IMediator _mediator;

    protected IMediator Mediator 
        => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

    protected ActionResult HandleResult<T>(Result<T> result)
    {
      if (result == null) return NotFound();
      if (result.IsSuccess && result.Value != null) return Ok(result.Value);
      if (result.IsSuccess && result.Value == null) return NotFound();
      return BadRequest(result.Error);
    }
  }
}
```

The code defines a base class for API controllers in a C# ASP.NET Core application.
The class has a private field _mediator of type IMediator. The IMediator interface is part of the Mediator design pattern, which is used to separate the concerns of reading and writing data.

The ```protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>()``` is a property that returns the value of _mediator. If _mediator is null, it uses the HttpContext.RequestServices property to get an instance of IMediator and assigns it to _mediator.

The ```protected ActionResult HandleResult<T>(Result<T> result)``` method is used to handle the results of a request. It takes a generic type parameter T and a ```Result<T>``` object as input. The ```Result<T>``` object is used to represent the result of a command or query in the Mediator pattern.


## Flow of Control

```mermaid
   API Request --> JSON Parser --> API Controller --> Middleware Authentication --> Middleware Authorization --> Policies
```