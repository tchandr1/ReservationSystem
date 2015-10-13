package edu.iit.sat.egen.restaurantreservationbackend;

import edu.iit.sat.egen.restaurantreservationbackend.Tablereserve;
import javax.annotation.Generated;
import javax.persistence.metamodel.CollectionAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2015-10-12T12:19:26")
@StaticMetamodel(Customer.class)
public class Customer_ { 

    public static volatile SingularAttribute<Customer, String> arrivaldate;
    public static volatile SingularAttribute<Customer, String> firstname;
    public static volatile SingularAttribute<Customer, Integer> customerId;
    public static volatile SingularAttribute<Customer, String> arrivaltime;
    public static volatile SingularAttribute<Customer, Integer> phonenumber;
    public static volatile SingularAttribute<Customer, Integer> peoplecount;
    public static volatile CollectionAttribute<Customer, Tablereserve> tablereserveCollection;
    public static volatile SingularAttribute<Customer, String> email;
    public static volatile SingularAttribute<Customer, String> lastname;

}