const form=document.getElementById('estimate-form');
const service=document.getElementById('service');
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{service.value=link.dataset.service;}));
form.addEventListener('submit',event=>{event.preventDefault();const status=document.getElementById('confirmation');status.hidden=false;status.textContent=`Demo request preview: ${service.value}. In the finished website, this step would send an enquiry to Moose Landscaping. This demonstration has not sent or saved anything.`;status.focus();});
