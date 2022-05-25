import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const AccordionContainer = ( { research, design, reflection } ) => {
  return (
    <div className="single-project__accordion">
    <Accordion className='single-project__accordion-container' allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading className='single-project__accordion-heading'>
                <AccordionItemButton className='single-project__accordion-button'>
                    Research
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='single-project__accordion-content'>
                <p>
                    { research }
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className='single-project__accordion-heading'>
                <AccordionItemButton className='single-project__accordion-button'>
                    Design
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='single-project__accordion-content'>
                <p>
                    { design }
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading className='single-project__accordion-heading'>
                <AccordionItemButton className='single-project__accordion-button'>
                    Reflection
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='single-project__accordion-content'>
                <p>
                    { reflection }
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
</div>  
  )
}

export default AccordionContainer;